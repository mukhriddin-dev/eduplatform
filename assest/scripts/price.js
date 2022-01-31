const accordion = document.getElementsByClassName('contentAc');

for (let i = 0; i < accordion.length; i++) {
    
    // const label = document.querySelector('.label');

    // label.addEventListener('click' , function () {
    //     alert('sdkzxj,n')
    // })

    accordion[i].addEventListener('click' , function() {
        this.classList.toggle('active');
    })
    
}