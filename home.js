function Home(){
  return (
    <Card

      txtcolor="primary"
      backgroundImage = "url ('money.png')"
      header="BadBank"
      title="Welcome to the bank!"
      text="For all Your Banking Needs."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}