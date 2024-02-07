const answr = document.getElementsByClassName("question-body");
const header= document.getElementsByClassName('questionwrapper');
const minus = document.querySelectorAll('img[class]')
const plus = document.querySelectorAll('.questionwrapper :nth-child(2)')
const qbody = document.querySelectorAll('question-body')

for(let i = 0; i < header.length;i++){
    header[i].addEventListener(
        'click',
        
        () => {
            if( answr[i].style.height == 'auto'){
                answr[i].style.height = '0px';
                plus[i].style.height = 'auto';
                plus[i].style.order = 0;
                minus[i].style.height ='0px';
                

            }else{
            answr[i].style.height = 'auto';
            plus[i].style.order = 3;
            plus[i].style.height = '0px';
            minus[i].style.height ='auto';
            minus[i].style.order = 1;
            
            
        }

        }
    )
}