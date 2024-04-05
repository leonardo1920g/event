const getusers = async () => {
  const res = await fetch('http://localhost:3003/users');
  const data = await res.json();

  console.log(data);
  
}; 

getusers();

const IndexPage = () => {

  

  return (
    <div>
      <h1>index page</h1>
    </div>
  )

};

export default IndexPage;