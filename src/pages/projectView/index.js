import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/navbar'
import web3 from '../../web3';
import knitts from '../../deployedContracts/knitts'
import { useHistory } from "react-router-dom";

export default function Index() {

  const [name, setName] = useState("");
  const [entryFee, setEntryFee] = useState("");
  const [maxPlay, setMaxPlay] = useState("");
  const [dur,setDuration]=useState("");

  const [loading,setloading] = useState(false)
  const [error,setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  let history = useHistory();

  
  const InvestHere = async() =>{
    if(!loading){
      setloading(true);
      try {
        let accounts = await web3.eth.getAccounts();
        let moderator = accounts[0];
        let organization=accounts[0];
       

        var send = await web3.eth.sendTransaction({ from:accounts[0],to:"0xcDEC88482a2Dd2b5e287d67d2f67eDE53cdf5FAd", value: web3.utils.toWei('1', 'ether') });
        // knitts.methods.createLeague(web3.utils.toWei("0.1", 'ether'), 2, 1).send( {from:moderator, value:web3.utils.toWei('1', 'ether') , gas: gasfee});
        // var leagueAddress = await knitts.methods.createLeague(web3.utils.toWei("0.1", 'ether'), 2, 1).call( {from:moderator, value:web3.utils.toWei('1', 'ether')});
        // console.log("league address:",leagueAddress);
        // var league = await League(leagueAddress[leagueAddress.length-1]);
        // var league_details = await league.methods.getDetails().call();
       
        history.push('/League1');

      } catch (error) {
        setErrorMessage(error.message);
        console.log(error);
        setloading(false);
        setError(true);
      }
    }
  }


  return (
      <div className="overflow-x-hidden text-white" style={{"backgroundImage":"url('./login_bg1.jpg')","backgroundPosition":"fixed","backgroundSize":"cover","backgroundRepeat":"no-repeat"}}>
      <div className="h-screen content-center">
      <Navbar className="absolute"/>

      <section class="relative max-w-7xl w-full mt-10 pb-20 lg:w-4/5 mx-auto px-6 text-gray-100 body-font ">
        <div class="container h-full content-center flex flex-wrap mx-auto items-center justify-center align-middle items-center ">

          <div className="flex flex-wrap justify-center w-full md:w-full mt-16 items-center bg-gray-900 bg-opacity-80 shadow px-20 pt-16 pb-20 rounded-lg">
            
            <div className="w-full">
              <h1 className="lg:text-5xl text-xl font-extrabold mb-4 leading-tight text-heading-blue text-center">Coin Fantasy</h1>
            </div>
            
            <div className="w-full">
              <p className="leading-7 text-base font-bold text-center my-6">Play with confidence on the world’s 1st and most secure crypto fantasy game for Crypto Financial Markets. Earn fees, Mint NFTs as rewards, build up your track record on the CoinFantasy Platform, sell your NFTs and rope in sponsors via our Launchpad!</p>
            </div>

            <div className="w-full">
              <a href="https://coinfantasy.io/">
              <p className="leading-7 text-base font-bold text-center my-2">https://coinfantasy.io/</p>
              </a>
            </div>


            <div className="w-full flex justify-center">
              <img src="./bg.jpg" className="w-5/6 m-4 rounded-lg"/>
            </div>

            {/* <Link to="/Dashboard"> */}
            <div className="mt-8">  
              <input type="number" className="p-3 px-8 mr-4 border border-bg-white bg-gray-900 rounded text-white placeholder-gray-300" placeholder="Enter ETH to invest"/>
              <button onClick={InvestHere} className="mt-4 px-8 py-3 rounded font-extrabold bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
              <svg class={loading ? "animate-spin h-5 w-5 mr-3 border-t-2 border-bg-white rounded-full" : "hidden"} viewBox="0 0 24 24">
              </svg>
              <div className={loading? "hidden" : ""}>
                Invest
              </div>
              </button>
            </div>
            {/* </Link> */}
          </div>
        
        </div>
      </section>
      </div>
      </div>
    )
}
