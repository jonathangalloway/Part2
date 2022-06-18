        let name = prompt("Welcome to GC mini golf! What is your name?");
            document.write(name);
            let holes = Number (prompt(`Hi ${name}! Would you like to play 3 or 6 holes today?`))

            if (holes === 3){
                let hole1 = prompt (`How many putts for hole 1? (par: 3)`);
                let hole2 = prompt (`How many putts for hole 2? (par: 3)`);
                let hole3 = prompt (`How many putts for hole 3? (par: 3)`);
                let total = 0
          let `${putts}` = Number (`${hole1} + ${hole2} + ${hole3}`)
          total += `${putts}`;
          
        if (total-9<0){
        console.log (`Great job, ${name} Your total par was: ${total-9}`)
        }else if (total-9>0)
        console.log (`Nice try, ${name}... Your total par was: +${total}`)
        else (total-9 === 0)
            console.log(`Good game, ${name}. Your total par was: 0.`)


            }else if (holes === 6){
              let hole01 = prompt (`How many putts for hole 1? (par: 3)`);
                let hole02 = prompt(`How many putts for hole 2? (par: 3)`);
                let hole03 = prompt (`How many putts for hole 3? (par: 3)`);
                let hole04 = prompt (`How many putts for hole 4? (par: 3)`);
                let hole05 = prompt (`How many putts for hole 5? (par: 3)`);
                let hole06 = prompt (`How many putts for hole 6? (par: 3)`);
               }
            let total = 0
          let `${putts}` = Number (`${hole01} + ${hole02} + ${hole03} + ${hole05}+ ${hole06}`)
             total += `${putts}`;

   if (total-18 < 0){
       console.log(`Great job, ${name} Your total par was: ${total-18}`)
   }else if (total-18 > 0)
        console.log(`Nice try, ${name}... Your total par was: +${total}`)
    else (total-18 === 0)
        console.log(`Good game, ${name}. Your total par was: 0.`)



    
        

        
 