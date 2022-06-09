function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow}/>}
    />
  )
}

function DepositMsg(props){
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Deposit again
    </button>
  </>);
} 

function DepositForm(props){
  const [amount, setAmount]   = React.useState('');
  const [balance, setBalance] = React.useState(0);
  const ctx = React.useContext(UserContext);  

  function handle(){
    console.log(email,amount);
    const user = ctx.users.find((user) => user.email == email);
    if (!user) {
      props.setStatus('fail!');
      return;      
    }

    user.balance = user.balance + Number(amount);
    console.log(user);
    props.setStatus('');      
    props.setShow(false);
  }
console.log(ctx)
  return(<>

    Balance<br/>
    <p>(ctx,users)</p>
    <br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Deposit</button>

  </>);
}
