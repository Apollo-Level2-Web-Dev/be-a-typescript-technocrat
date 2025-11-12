// oop - abstraction

// idea
// implemenation pore krbo

/*

   1. interface
   2. abstract class
*/

// idea
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// //implementation
// class Musicplayer implements MediaPlayer {
//   play() {
//     console.log("Playing music....");
//   }
//   pause() {
//     console.log("Music paused... ");
//   }
//   stop() {
//     console.log(`Music stopped`);
//   }
// }

// const MezbaPlayer = new Musicplayer(); // instance
// MezbaPlayer.play();

//idea
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

//implementation
class MezbaPlayer extends MediaPlayer {
  play() {
    console.log(`Playing music...`);
  }
  pause(): void {
    console.log("Music is paused !");
  }
  stop(): void {
    console.log("Music is stopped !");
  }
}

const mezbaPlayer1 = new MezbaPlayer();
mezbaPlayer1.play();
