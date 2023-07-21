document.addEventListener('DOMContentLoaded', () => {
    /*document.querySelectorAll('button').forEach(  button =>{
        button.onclick = function(){
            document.querySelector('#colors').style.color = button.dataset.color;
        }
    });*/

    document.querySelector('select').onchange = function() {
        document.querySelector('#colors').style.color = this.value;
    }
});