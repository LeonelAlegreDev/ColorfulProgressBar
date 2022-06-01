const progress = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    displayProgress(totalHeight);
}
function displayProgress(height){
    let progressHeight = (window.pageYOffset / height) * 100;
    progress.style.height = progressHeight + "%";
}
const observer = new ResizeObserver(entries => {
    totalHeight = document.body.scrollHeight - window.innerHeight;
    displayProgress(totalHeight);
});
observer.observe(document.body);