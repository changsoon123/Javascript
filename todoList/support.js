const $icon = document.querySelector('.icon');
const $type = document.querySelector('.main .type');
const $span = document.querySelector('.main .lnr');
const $todolist = document.querySelector('#todoList')
const $li = document.querySelector('#todoList li')
const $lii = document.querySelectorAll('#todoList li')
const $input = document.querySelector('.type input');
const $leftext = document.querySelector('.left .text')
const $rightremove = document.querySelectorAll('.right .lnr-cross-circle');
// let $shallowClone;

$icon.addEventListener('click', function (e) {
    // if(e.target!==$icon && e.target!==$span){
    // alert("할 일이 너무 많아요~~~");
    const $inputValue = $input.value;
    // console.log($inputValue);
    $input.value = '';
    //     return;
    // }

    // const $li2 = document.createElement('li');
    // console.log($li)
    const $shallowClone = $li.cloneNode(true);
    console.log($shallowClone.children[0].children[1])
    $shallowClone.children[0].children[1].textContent = $inputValue;
    // console.log($shallowClone)

    const $removeButton = $shallowClone.querySelector('.right .lnr-cross-circle');
    $removeButton.addEventListener('click', function (e) {
        document.querySelector('.test')
        e.target.parentNode.parentNode.remove();
    });

    if ($shallowClone.children[0].children[1].textContent === '') {
        alert('빈칸은 입력할 수 없습니다! 입력해주세요.')
        return;
    }
    $todolist.appendChild($shallowClone)
    // $li2.textContent = $inputValue;
    // console.log($li2)
    // $todolist.appendChild($li2); 



})

$input.addEventListener('keyup', function (e) {
    // console.log($input)
    if (e.key === 'Enter') { //keycode === 13 , enter와 같음
        // alert("할 일이 너무 많아요~~~");
        const $inputValue = $input.value;
        $input.value = '';
        const $shallowClone = $li.cloneNode(true);
        $shallowClone.children[0].children[1].textContent = $inputValue;
        if ($shallowClone.children[0].children[1].textContent === '') {
            alert('빈칸은 입력할 수 없습니다! 입력해주세요.')
            return;
        }
        const $removeButton = $shallowClone.querySelector('.right .lnr-cross-circle');
        $removeButton.addEventListener('click', function (e) {
            e.target.parentNode.parentNode.remove();
        });
        $todolist.appendChild($shallowClone);
        // console.log($shallowClone)

        $todolist.appendChild($shallowClone)
    } else if (e.key === 'Escape') {
        $input.value = '';
    }
})


for (let $riri of $rightremove) {

    $riri.addEventListener('click', function (e) {


        // console.log($lii)
        // console.log($rightremove);
        // console.log($todolist)

        // e.target.closest('li').remove();

        
        e.target.parentNode.parentNode.parentNode.classList.add('test');
        console.log(e.currentTarget.parentNode.parentNode.parentNode)
        setTimeout(function () {
            // if (e.currentTarget.parentNode.parentNode) {
                e.target.parentNode.parentNode.remove();
            // }
        }, 1000);

        // let $liii = document.querySelectorAll('li');
        // for(let $iplus of $liii){
        // if(e.target===$iplus.querySelector('.rightremove')){
        //     $iplus.remove();
        // }
        // }
        // for(let $iplus of $lii){

        //     if(e.target===$iplus){
        //         $iplus.remove();
        //     }
        //     // if($iplus===e.target){

        //     // }
        // }
    })
}