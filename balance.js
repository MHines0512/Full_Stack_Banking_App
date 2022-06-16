function Balance(){
  const [show, setShow]     = React.useState(true);
  const [data, setData] = React.useState('');
  const [status, setStatus] = React.useState('');  

  function fetchAccount() {
    if (ctx.user!=='') { 
    fetch(`/account/balance/${ctx.email}`)
    .then(response => response.json())
    .then(data => {
            console.log(data);
            setData('$' + data[0].balance);
    });
    } else {
        setStatus('Login to see account balance');
        setTimeout(() => setStatus(''),3000);
    }
}


  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success!</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  
  const ctx = React.useContext(UserContext);  

  function handle(){
    const user = ctx.users.find((user) => user.email == email);
    if (!user) {
      props.setStatus('Error: Email not recognized')      
      return;      
    }

    setBalance(user.balance);
    console.log(user);
    props.setStatus('Your balance is: ' + user.balance);      
    props.setShow(false);
  }

  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}