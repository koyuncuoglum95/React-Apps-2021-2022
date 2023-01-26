import { useEffect, useRef } from 'react';
import './App.css';
import * as faceapi from 'face-api.js';


function App() {

  const imgRef = useRef();
  const canvasRef = useRef();

  // this function is detecting all faces with landmarks and expressions with images
  const handleImage = async () => {
    const detections = await faceapi
    .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceExpressions();

    canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(imgRef.current); // adding images into canvas
    faceapi.matchDimensions(canvasRef.current, {
      width: 940,
      height: 650
    });

    const resized = faceapi.resizeResults(detections, { // this is size is detections
      width: 940,
      height: 650,
    });


    // Drawing final results inside of canvas element with resized variable
    faceapi.draw.drawDetections(canvasRef.current, resized);
    faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
    faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
  };


  // This loads face api models 
  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"), // This is tiny face detector
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"), // 68 Net face Landmark
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"), // Face Recognition
        faceapi.nets.faceExpressionNet.loadFromUri("/models"), // Face expressions
      ])
      .then(handleImage) // This will happen after the function runs successfully 
      .catch(e => console.log(e)) // This will give an error if there is something wrong in function run
    };

    imgRef.current && loadModels(); // if imgRef exists and loadModels() function works
  },[]);


  return (    
    <div className="app">
      <img
      ref={imgRef}
      alt=''
      width="940"
      height="650"
      crossOrigin='anonymous'
      src="https://cdn.vox-cdn.com/thumbor/XcGTaQxMGBJxx0z5Xu9P-XmCciI=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23060058/lesnar2.jpg"
      />

      <canvas ref={canvasRef} width="940" height="650"/>
    </div>
  );
}

export default App;
