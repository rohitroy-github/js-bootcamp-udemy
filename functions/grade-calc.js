
let gradeCalculator = function(score, totalscore)
{
    let per = (score/totalscore) * 100

    if(per >= 90)
    {
        console.log(`You got A with ${per} percentage score.`)
    }

    else if(per >= 80 && per < 90)
    {
        console.log(`You got B with ${per} percentage score.`)
    }

    else if(per >= 70 && per < 80)
    {
        console.log(`You got C with ${per} percentage score.`)
    }
    
    else if(per >= 60 && per < 70)
    {
        console.log(`You got D with ${per} percentage score.`)
    }

    else if(per > 50 && per < 60)
    {
        console.log(`You got ${per} percentage score.`)
    }

    else
    {
        console.log(`You failed.`)
    }
}

//function call 
gradeCalculator(48, 50)
