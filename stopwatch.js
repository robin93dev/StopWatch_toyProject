const watch = document.querySelector("#stopwatch");
      let millisecound = 0;
      let timer;
      let operating = false;

      function timeStart(){
        document.querySelector('#pause').innerText = 'Stop';
        operating = true;
        watch.style.color = "#0f62fe";
        console.log('실행전타이머',timer);
        clearInterval(timer); //중복으로 눌러서 빨라지는거 방지위해
        timer = setInterval(() => {
          //1 이란 타이머 실행
          console.log('timer',timer);
          millisecound += 10;

          let dateTimer = new Date(millisecound);

          watch.innerHTML = 
          ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
        }, 10);
      }


      function timePaused() {
        
          document.querySelector('#pause').innerText = '>||';
          watch.style.color = "red";
          clearInterval(timer);
          console.log('timer',timer);
          operating = false;
          console.log(operating);
          document.querySelector('#start').innerText = '  ';
          document.querySelector('#start').removeEventListener('click',clickEvent)
       
      }

      function timeReset(){
        clearInterval(timer)
        millisecound = 0;
        watch.innerHTML = "00:00:00:00";
        watch.style.color = 'black';
        document.querySelector('#pause').innerText = 'Stop';
        document.querySelector('#start').innerText = 'Start';


      }

      function clickEvent(e) {
        const el = e.target;

        if(el.id === 'start') timeStart();
        if(el.id === 'pause' && operating === true) {timePaused();
        return}
        if(el.id ==='pause' && operating === false) timeStart();
        if(el.id === 'reset') timeReset();
        
      }

      document.addEventListener('click', clickEvent);