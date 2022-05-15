import "./App.css";
import Logo from "./Logo";

function App() {
  return <div className="flex w-screen h-screen">
    <ServerList>

    </ServerList>
    <ChannelBar>

    </ChannelBar>
    <div id="chatArea" className="border-[#43464C] border-r-[1px] w-[100%] bg-[#36383E] flex-shrink"></div>
    <div id="friendsBar" className="w-[240px] bg-[#36383E] flex-shrink-0" ></div>
  </div>;
}

function ServerList() {

  return <div id="serverList" className="w-[72px] h-full bg-[#202225] flex-shrink-0" >
    <Server home pressed={false}>
      <div>
        <Logo />
      </div>
    </Server>

    {
      // Test amaçlı  U
      //             \/
    }

    <Server>A</Server>

    <Server>B</Server>

    <Server>C</Server>
  </div>
}

function Server({ children, home, pressed }) {

  return <div>
    <div className="side w-[48px] h-[12px]"></div>
    <div className="flex tutorialContainer w-[72px] h-[48px]">
      <div className="side w-[12px] h-[48px]"></div>
      <div className="cursor-pointer w-[100%] h-[48px] flex-shrink">

        <div className={`flex justify-center items-center w-[100%] h-full ${(!!home && pressed) ? "bg-[#5864F3]" : "bg-[#36383E]"} text-white rounded-full`}>
          {children}
        </div>

      </div>
      <div className="side w-[12px] h-[48px]"></div>

    </div>
  </div>
}

function ChannelBar() {
  return <div id="channelBar" className="w-[240px] h-full bg-[#2F3136]">
    <header id="guildBar" className="flex justify-center items-center magic-text w-full px-[16px] py-[12px] h-[60px] border-[#3B3D42] border-b-[1px] flex-shrink ">
      <div className="flex w-full h-full items-center">Emin Rhyme</div>
    </header>
    <div id="profile" className="h-full">

    </div>
  </div>
}

export default App;
