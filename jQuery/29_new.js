$(function(){
    let divWidth = $(`#sliderBoard`).Width()
    let imgCount = $(`#content li`).length

    for(let i = 0; i <imgCount; i++){
        $(`#contenButton`).append(`<li></li>`)
    }
    $(`#contenButton li:nth-child(1)`).addClass(`clicked`);

    $(`#conten li`).Width(divWidth)
    $(`#conten`).Width(divWidth * imgCount)

    

})