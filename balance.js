function Balance() {
  const ctx = React.useContext(UserContext); 
  const [data, setData] = React.useState('');
  const [status, setStatus]     = React.useState(true);

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
          setTimeout(() => setStatus(''),4000);
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

  function handle(){
    const user = ctx.users.find((user) => user.email == email);
    if (!user) {
      props.setStatus('fail!')      
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
