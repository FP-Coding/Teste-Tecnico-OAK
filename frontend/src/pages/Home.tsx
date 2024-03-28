import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

function Home () {

  return (
    <div className="flex flex-col items-center gap-12 bg-[#111827] h-screen w-screen">
      <Header/>
      <Main />
      <Footer/>
    </div>
)
}

export default Home;