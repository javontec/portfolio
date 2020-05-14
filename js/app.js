//////// variables
const nav = document.querySelector('.nav-bar');
const body = document.querySelector('body')
// UI INDEX
// const videoContainer = document.querySelector('.container')
const video = document.querySelector('.fullscreen-video-wrap')
const header = document.querySelector('.header-content')
// UI MEDIA
const gallery = document.querySelector('.gallery');
const row = document.querySelector('.row');
// UI BIO
const about = document.querySelector('.about-section');
const bio = document.querySelector('.inner-container');

// TIMELINE
var tl = new TimelineMax();

tl.fromTo(body,2, { height:"0%" }, { height:"100%" } );
tl.fromTo(video,3, {top:-100, opacity:0, easeIn:Power4.easeOut}, {top:0,opacity:100, easeIn:Power4.easeOut} );
tl.fromTo(header,3.5, {right:-100}, {right:0} );
// tl.fromTo(video,1.5, {left:100}, {left:0});