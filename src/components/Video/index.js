import * as posenet from '@tensorflow-models/posenet';
// import * as tf from '@tensorflow/tfjs-node'
import React from 'react';
import img from '../../images/man-working-with-bad-posture-630x630.jpg';

async function getEstimation(imageElement){
   const scaleFactor = 0.50;
   const flipHorizontal = false;
   const outputStride = 16;
   // const imageElement = <img src={img} alt="testimg" />
   
   // load the posenet model
const net = await posenet.load();
const pose = await net.estimateSinglePose(imageElement, scaleFactor, flipHorizontal, outputStride);
console.log(pose)
}

const Video =  () => {
   // const net = await posenet.load();
   getEstimation(<img src={img} alt="testimg" />)
   return(
      <img src={img} alt="testimg" />
   )
}
export default Video
