
    const clearBtn = document.getElementById('clearBtn')
    const main = document.getElementById('main')
    let history = JSON.parse(localStorage.getItem('history'));
    const addTransaction = (sender, amount, receiver,date, reason) =>{
      history.push({
        sender,
        amount,
        receiver,
        date,
        reason
      });
      localStorage.setItem('history', JSON.stringify(history))
      return {sender, amount, receiver, date, reason};
    }
    const createTransactionElement = ({ sender, amount, receiver, date, reason }) => {
      const div = document.createElement('div');
      const sendersp = document.createElement('p');
  
      sendersp.innerText = `${sender} sent ${amount} to ${receiver} on this date ${date} for ${reason}`;
  
      div.append(sendersp);
      main.appendChild(div);
    }
    history.forEach(createTransactionElement);
    clearBtn.onclick = () =>{
      var conFirm = confirm("Do you really want to clear transaction history?");
      if(conFirm == true){
      localStorage.setItem('history', JSON.stringify([]));
      window.location.reload(true);
      }
    }
    