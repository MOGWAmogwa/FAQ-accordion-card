
const titles = document.querySelectorAll('.title');
const dataId = document.querySelectorAll('[data-id]');





let list = []; //0 2
titles.forEach((title)=> {
    title.addEventListener('click', (event)=>{

        const target = event.target
        if(target.className == 'title__Q' || target.className == 'arrow-down' || target.className == 'arrow-down rotate'){
            // target == title__Q or arrow-down | target.parentNode == title
            const title = target.parentNode;
            const titleA = target.parentNode.nextElementSibling;
            const arrowDown=title.lastElementChild
            title.classList.toggle('bold');
            titleA.classList.toggle('open');
            arrowDown.classList.toggle('rotate')


            if(titleA.className == 'title__A open'){
                list.push(titleA.dataset.id)
            }
            console.log(list);
          
            if (list.length>1 ){
            // dataId[list[list.length-2]] === 이전에 선택한 data-id의 태그 (titleA)
            dataId[list[list.length-2]].classList.remove('open')
            dataId[list[list.length-2]].previousElementSibling.classList.remove('bold')
            dataId[list[list.length-2]].previousElementSibling.childNodes[3].classList.remove('rotate')
            } 

         
        } else {
            // target == title
            const title = target
            const titleA = target.nextElementSibling
            const arrowDown=title.lastElementChild
            title.classList.toggle('bold');
            titleA.classList.toggle('open');
            arrowDown.classList.toggle('rotate')


            if(titleA.className == 'title__A open'){
                list.push(titleA.dataset.id)
            }
            console.log(list);
            if (list.length>1 ){
                dataId[list[list.length-2]].classList.remove('open')
                dataId[list[list.length-2]].previousElementSibling.classList.remove('bold')
                dataId[list[list.length-2]].previousElementSibling.childNodes[3].classList.remove('rotate')                } 
           

        }
        
    })


})

