import RegisterModal from '../components/Register.modal';
import Table from '../components/Table';

function Home () {

  return (
    <div className="flex flex-col items-center gap-12">
      <h1 className='text-3xl text-center mb-4 text-blue-500'>
      Hello World
      </h1>
      <Table/>
      <RegisterModal/>
    </div>
)
}

export default Home;