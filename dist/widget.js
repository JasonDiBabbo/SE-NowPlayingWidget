(()=>{"use strict";class t{constructor(t){if(this.artStackElement=t,!this.artStackElement)throw new Error("ArtStack::Constructor - DOM element with class 'art-stack' could not be found.")}set artwork(t){this.appendImage(t),1===this.artStackElement.children.length?this.fadeInImage(0):Promise.all([this.fadeOutImage(0),this.fadeInImage(1)]).then((()=>{const t=this.artStackElement.children[0];this.artStackElement.removeChild(t)}))}appendImage(t){const e=document.createElement("img");e.classList.add("art"),e.classList.add("transparent"),e.src=t,this.artStackElement.appendChild(e),this.requestBrowserAnimation(e)}fadeInImage(t){if(this.artStackElement.children.length<=t)throw new Error(`ArtStack::fadeInImage - Parameter 'index' with value '${t}' is out of bounds.`);const e=this.artStackElement.children[t];return new Promise((t=>{const r=n=>{"opacity"===n.propertyName&&(e.removeEventListener("transitionend",r),t())};e.addEventListener("transitionend",r),e.classList.remove("transparent")}))}fadeOutImage(t){if(this.artStackElement.children.length<=t)throw new Error(`ArtStack::fadeOutImage - Parameter 'index' with value '${t}' is out of bounds.`);const e=this.artStackElement.children[t];return new Promise((t=>{const r=n=>{"opacity"===n.propertyName&&(e.removeEventListener("transitionend",r),t())};e.addEventListener("transitionend",r),e.classList.add("transparent")}))}requestBrowserAnimation(t){t.offsetWidth}}var e;!function(t){t[t.None=0]="None",t[t.AlbumArt=1]="AlbumArt",t[t.Custom=2]="Custom"}(e||(e={}));class r{constructor(t){this.album=t?.album?.["#text"],this.artist=t?.artist?.["#text"],this.nowPlaying=!!t?.["@attr"]?.nowplaying,this.title=t?.name;const e=t?.image;Array.isArray(e)?(this.albumArtSmall=e.find((t=>"small"===t?.size))?.["#text"],this.albumArtMedium=e.find((t=>"medium"===t?.size))?.["#text"],this.albumArtLarge=e.find((t=>"large"===t?.size))?.["#text"],this.albumArtExtraLarge=e.find((t=>"extralarge"===t?.size))?.["#text"]):(this.albumArtSmall=null,this.albumArtMedium=null,this.albumArtLarge=null,this.albumArtExtraLarge=null)}equals(t){return!!t&&this.album===t.album&&this.artist===t.artist&&this.title===t.title}}class n{constructor(t){if(this.apiKey=t,!this.apiKey)throw new Error("LastFmService::Constructor - Parameter 'apiKey' was not provided. An API key must be provided.")}async getMostRecentTrack(t){return this.getRecentTracks(t,1).then((t=>t&&t.length>0?t[0]:null))}async getRecentTracks(t,e){if(!t)throw new Error("LastFmService::getRecentTracks - Parameter 'user' cannot be null or undefined.");if(e<1||e>200)throw new Error("LastFmService::getRecentTracks - Parameter 'limit' must be a positive integer with a maximum value of 200.");const n=`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${t}&limit=${e}&api_key=${this.apiKey}&format=json`;return fetch(n,{mode:"cors",headers:{"Content-Type":"application/json",SameSite:"Strict"}}).then((t=>t.json())).then((t=>{const e=t?.recenttracks?.track,n=[];return e.forEach((t=>n.push(new r(t)))),n}))}}class s{static toMilliseconds(t){return 1e3*t}static toSeconds(t){return t/1e3}}class i{static GetGoogleFontSettings(t){if(!t)throw new Error("Parameter 'fieldData' is null or undefined.");if(!t.fontFamily)throw new Error("Field data entry for 'fontFamily' is missing.");if(!t.albumFontWeight)throw new Error("Field data entry for 'albumFontWeight' is missing.");if(!t.artistFontWeight)throw new Error("Field data entry for 'artistFontWeight' is missing.");if(!t.titleFontWeight)throw new Error("Field data entry for 'titleFontWeight' is missing.");const e=t.fontFamily,r=t.albumFontWeight,n=t.artistFontWeight,s=t.titleFontWeight;return{fontFamily:e,fontWeights:[...new Set([r,n,s])].sort(((t,e)=>parseInt(t)-parseInt(e)))}}static PrepareGoogleFontImports(t){if(console.log(t),!t)throw new Error("Parameter 'googleFontSettings' is null or undefined.");if(!t.fontFamily)throw new Error("A font family must be provided.");if(!t.fontWeights)throw new Error("A font weights array must be provided.");if(t.fontWeights.length<1)throw new Error("At least one font weight must be specified.");if(this.GoogleFontsIsPrepared())return;const e=document.createElement("link");e.id="googleFontsPreconnect1",e.rel="preconnect",e.href="https://fonts.googleapis.com";const r=document.createElement("link");r.id="googleFontsPreconnect2",r.rel="preconnect",r.href="https://fonts.gstatic.com",r.crossOrigin="anonymous",document.head.appendChild(e),document.head.appendChild(r),i.ImportGoogleFont(t)}static GoogleFontsIsPrepared(){return null!=document.getElementById("googleFontsPreconnect1")&&null!=document.getElementById("googleFontsPreconnect2")}static ImportGoogleFont(t){const e="https://fonts.googleapis.com/css2?family="+t.fontFamily.replace(" ","+")+":wght@"+t.fontWeights.join(";"),r=document.createElement("link");r.rel="stylesheet",r.href=e,document.head.appendChild(r)}}class o{constructor(r){if(!r)throw new Error("NowPlayingWidget::Constructor - Parameter 'options was not provided. Options must be provided.");if(!r.lastFmUsername)throw new Error("NowPlayingWidget::Constructor -  Options value for 'lastFmUsername' was not provided. A valid username must be provided.");if(r.apiPollFrequency<s.toMilliseconds(2))throw new Error("NowPlayingWidget::Constructor - Options value for 'apiPollFrequency' cannot be less than 2 seconds.");this.artMode=r.artMode,this.user=r.lastFmUsername,this.apiPollFrequency=r.apiPollFrequency,this.showAlbum=r.showAlbum,this.showArtist=r.showArtist,this.showTitle=r.showTitle,this.lastFmService=new n(r.lastFmApiKey),this.artStack=new t(document.querySelector(".art-stack")),this.artMode===e.None&&document.querySelector(".art-stack").remove(),this.albumElement=document.querySelector(".album"),this.artistElement=document.querySelector(".artist"),this.titleElement=document.querySelector(".title"),this.removeUnusedDomElements()}set album(t){this.albumElement.innerText=t}set artist(t){this.artistElement.innerText=t}set title(t){this.titleElement.innerText=t}checkNowPlaying(){this.lastFmService.getMostRecentTrack(this.user).then((t=>{const e=t.equals(this.currentTrack);if(t.nowPlaying&&!e){const e=!!this.currentTrack&&t.album===this.currentTrack.album;this.currentTrack=t,e?this.updateCurrentTrackInformation(this.currentTrack):this.updateCurrentTrack(this.currentTrack)}})).finally((()=>{setTimeout((()=>this.checkNowPlaying()),this.apiPollFrequency)}))}start(){this.checkNowPlaying()}removeUnusedDomElements(){this.showAlbum||this.albumElement.remove(),this.showArtist||this.artistElement.remove(),this.showTitle||this.titleElement.remove()}updateCurrentTrack(t){this.artMode==e.AlbumArt&&this.updateCurrentTrackArtwork(t),this.updateCurrentTrackInformation(t)}updateCurrentTrackArtwork(t){this.artStack.artwork=t.albumArtExtraLarge}updateCurrentTrackInformation(t){this.showAlbum&&(this.album=t.album),this.showArtist&&(this.artist=t.artist),this.showTitle&&(this.title=t.title)}}let a;window.addEventListener("onWidgetLoad",(function(t){const r=t.detail.fieldData,n=function(t){const r=s.toMilliseconds(t.lastFmApiPollFrequency),n=t.lastFmApiKey,i=t.lastFmUsername,o="true"===t.showAlbum,a="true"===t.showArtist,l="true"===t.showTitle;return{artMode:function(t){if(!t)throw new Error("Parameter 'settingValue' is null or undefined.");switch(t){case"none":return e.None;case"albumArt":return e.AlbumArt;case"custom":return e.Custom;default:throw new Error(`Unknown art mode value '${t}' provided.`)}}(t.artMode),apiPollFrequency:r,lastFmApiKey:n,lastFmUsername:i,showAlbum:o,showArtist:a,showTitle:l}}(r),l=i.GetGoogleFontSettings(r);i.PrepareGoogleFontImports(l),a=new o(n),a.start()}))})();