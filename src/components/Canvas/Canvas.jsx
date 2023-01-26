import { useOnDraw } from '../Drawer/Drawer';

const Canvas = ({
    width,
    height
}) => {

    // Using functions from Drawer.jsx
    const {
        setupCanvas,
        onCanvasMouseDown
    } = useOnDraw(onDraw);

    // This is our onDraw props
    function onDraw(ctx, point, prevPoint) {
        drawLine(prevPoint, point, ctx, '#000000', 5);
    }

    // Start lines
    function drawLine(
        start,
        end,
        ctx,
        color,
        width
    ) {
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        ctx.fill();

    }
    // canvas element belongs to the HTML, so I used this library to use automatic canvas
    return(
        <canvas
            width={width}
            height={height}
            onMouseDown={onCanvasMouseDown}
            style={canvasStyle}
            ref={setupCanvas}
        />
    );

}

export default Canvas;

const canvasStyle = {
    border: "1px solid black"
}