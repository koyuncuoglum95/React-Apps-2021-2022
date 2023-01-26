import { useEffect, useRef } from "react";

export function useOnDraw(onDraw) {

    // These are references
    const canvas = useRef(null);
    const drawingRef = useRef(false);
    const prevPoints = useRef(null);

    const mouseMoveListenerRef = useRef(null);
    const mouseUpListenerRef = useRef(null);

    function setupCanvas(ref) {
        canvas.current = ref;
    }

    function onCanvasMouseDown() {
        drawingRef.current = true;
    }

    // Explaination: if there is Canvas, x: clientX drawing and y: clientY drawing. Else everything is null.
    // This following is a cordinator of x and y and returns number
    useEffect(() => {
        function computePointInCanvas(clientX, clientY) {
            if (canvas.current) {
                const boundingRect = canvas.current.getBoundingClientRect();
                return {
                    x: clientX - boundingRect.left,
                    y: clientY - boundingRect.top
                }
            } else {
                return null;
            }

        }
        // This function enables having 2d drawer and if draw exists, then adding values into onDraw parameter such as ctx, point and etc
        function initMouseMoveListener() {
            const mouseMoveListener = (e) => {
                if (drawingRef.current && canvas.current) {
                    const point = computePointInCanvas(e.clientX, e.clientY);
                    const ctx = canvas.current.getContext('2d');
                    if (onDraw) onDraw(ctx, point, prevPoints.current);
                    prevPoints.current = point;
                    console.log(point);
                }
            }
            mouseMoveListenerRef.current = mouseMoveListener;
            window.addEventListener("mousemove", mouseMoveListener);
        }

        // Initializing mouseUpEventListener
        function initMouseUpListener() {
            const listener = () => {
                drawing.current = false;
                prevPoints.current = null;
            }
            mouseUpListenerRef.current = listener;
            window.addEventListener("mouseup", listener);
        }

        // this is mouseMover for pointing a thing and mouseup is when we finished drwaing a point
        function cleanup() {
            if (mouseMoveListenerRef.current) {
                window.removeEventListener("mousemove", mouseMoveListenerRef.current);
            }
            if (mouseUpListenerRef.current) {
                window.removeEventListener("mouseup", mouseUpListenerRef.current);
            }
        }

        initMouseMoveListener();
        initMouseUpListener();
        return () => cleanup();

    }, [onDraw]);

    return {
        setupCanvas,
        onCanvasMouseDown
    }

};
