$(document).on('turbolinks:load', function() {
    var onChange = function(oldPos, newPos) {
      console.log("Position changed:");
      console.log("Old position: " + ChessBoard.objToFen(oldPos));
      console.log("New position: " + ChessBoard.objToFen(newPos));
      console.log("--------------------"); }

    var board1 = ChessBoard('board1', {
      draggable: true,
      dropOffBoard: 'trash',
      sparePieces: true,
      onChange: onChange });

    $('#startBtn').on('click', board1.start);
    $('#clearBtn').on('click', board1.clear);
})

