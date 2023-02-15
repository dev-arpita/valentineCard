const videos = [
    "https://giphy.com/embed/l4pTdcifPZLpDjL1e",
    "https://giphy.com/embed/5vYwHanb6y3HWBQIox"
]
const renderVideo = ()=> {
   const targetObj =  videos.map(item => {
        return `
        <iframe src="${item}" width="280" height="280" frameBorder="0" class="giphy-embed"
            allowFullScreen></iframe>
        `
    }).join("")
    document.getElementById("gift").innerHTML = targetObj
}

document.getElementById("btn").addEventListener("click", renderVideo)
/**
 *    <iframe src="https://giphy.com/embed/l4pTdcifPZLpDjL1e" width="480" height="480" frameBorder="0" class="giphy-embed"
            allowFullScreen></iframe>
 *      <iframe src="https://giphy.com/embed/5vYwHanb6y3HWBQIox" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
 */
