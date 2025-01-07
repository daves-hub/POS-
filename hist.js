    // Get the clear button element
    const clearBtn = document.getElementById('clearBtn')
    // Get the main container element
    const main = document.getElementById('main')
    // Retrieve transaction history from local storage
    let history = JSON.parse(localStorage.getItem('history'));
    
    // Function to add a new transaction to the history
    const addTransaction = (sender, amount, receiver, date, reason) => {
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
    
    // Function to create a transaction element and append it to the main container
    const createTransactionElement = ({ sender, amount, receiver, date, reason }) => {
      const div = document.createElement('div');
      const sendersp = document.createElement('p');
  
      sendersp.innerText = `${sender} sent ${amount} to ${receiver} on this date ${date} for ${reason}`;
  
      div.append(sendersp);
      main.appendChild(div);
    }
    
    // Iterate through the transaction history and create elements for each transaction
    history.forEach(createTransactionElement);
    
    // Clear button click event handler
    clearBtn.onclick = () => {
      var conFirm = confirm("Do you really want to clear transaction history?");
      if(conFirm == true){
        localStorage.setItem('history', JSON.stringify([]));
        window.location.reload(true);
      }
    }
