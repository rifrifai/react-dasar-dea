import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const linkRef = useRef(null);

  const goto = (ref) => {
    scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h1 onClick={() => goto(linkRef.current)}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat
        fugit quia rerum eaque facere maxime placeat ipsa cupiditate molestias.
        Deserunt harum consequatur ratione voluptas facere magni adipisci.
        Delectus consequatur similique quisquam illo assumenda necessitatibus
        pariatur perspiciatis alias magnam, earum error quam labore dicta iste
        cupiditate dolore. Quaerat perferendis laudantium cum, illum numquam
        culpa soluta. Sunt ipsum doloribus quaerat accusantium iusto explicabo,
        tenetur illo nulla similique voluptas dolore impedit veritatis, ipsam et
        tempore, inventore amet earum qui! Saepe dolor recusandae, perspiciatis
        quas nemo, possimus esse voluptatem doloremque adipisci quibusdam minus
        repellat voluptate dignissimos! Et doloremque tenetur ullam quibusdam
        dignissimos deleniti!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusantium,
        minima dignissimos corrupti iste similique quos quae eligendi autem
        maxime voluptates amet, unde doloremque. Distinctio, odit maxime iure ea
        ducimus molestiae unde tempora nostrum deserunt cupiditate? Voluptatum,
        veritatis numquam! Facilis accusantium libero id vero aut, praesentium
        quas a sunt, quaerat quibusdam expedita earum animi architecto impedit
        doloribus blanditiis ea cum. Animi harum hic fuga consequatur, magnam
        praesentium iure est aliquid quasi modi! Est corrupti debitis dolorum,
        itaque repellendus odio dolore sunt voluptatum expedita facere assumenda
        beatae sed illum velit possimus numquam sequi ducimus suscipit impedit
        ratione maxime distinctio. Modi, inventore ad. Iusto dolor consequuntur
        vitae, ex possimus beatae minima asperiores repellat, velit consequatur
        laboriosam temporibus aspernatur excepturi, earum quos! Inventore sed
        consequatur quaerat similique, eveniet facere laborum, maxime facilis
        distinctio voluptatem quam officiis illum veritatis, rem ducimus optio
        eos nostrum? Veritatis necessitatibus voluptatum possimus tenetur
        praesentium consequuntur dignissimos odio quae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        tenetur molestiae sapiente iusto optio vel, asperiores accusantium nulla
        sunt adipisci tempora incidunt velit. Qui alias quibusdam, dignissimos
        sed amet, quos id saepe temporibus maxime quam, non consectetur? Fugit,
        excepturi et reprehenderit voluptatem corrupti, assumenda quos aperiam
        provident pariatur ad, asperiores iusto fuga totam ipsa nisi laudantium.
        Modi dolorem aperiam aliquid vitae delectus, natus dolores amet dolorum
        repudiandae illum debitis assumenda atque rem velit unde earum libero
        expedita repellendus doloremque, tempore porro necessitatibus maxime!
        Atque placeat obcaecati quam hic ipsa repellat quo iste, quae numquam
        reiciendis vitae accusantium voluptatem voluptates mollitia.
      </p>
      <div ref={linkRef}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab
        deserunt excepturi provident distinctio magnam maxime repellendus
        commodi voluptatibus porro, dolor nobis quibusdam aut sed odio magni
        vitae dolore tempora ex voluptates ullam, voluptate qui? Nihil enim qui
        itaque dolores odio eligendi tempora obcaecati. Consequuntur vero
        tenetur iste. Molestiae in officia minus quo saepe aliquam non atque
        error, distinctio repudiandae culpa maxime porro sint ducimus tenetur
        veniam numquam doloribus nostrum vitae ullam iste sapiente dolores
        omnis. Ratione similique reiciendis facilis alias nesciunt labore ea
        voluptatem incidunt, sequi, omnis odit. Ducimus numquam facilis sequi
        eum cumque? Ipsa consequuntur eaque, laudantium quisquam eum harum sunt
        aut esse dignissimos praesentium repellendus, deleniti asperiores cumque
        non excepturi libero similique nisi quaerat delectus. Neque recusandae
        maiores architecto nobis ducimus ut, quia quasi laudantium fuga
        excepturi pariatur expedita sequi vero, quam labore nemo. Distinctio
        adipisci ex architecto consequuntur aut totam! Ipsam aperiam perferendis
        consectetur in, officia officiis, debitis voluptate repellendus tempore
        eum reprehenderit nostrum aut corrupti velit praesentium quasi itaque
        dolore quaerat magni tenetur qui? Quidem eum ea, molestias aperiam
        consectetur facere temporibus officia fugit! Eveniet rem facere laborum.
        Vel ratione ipsam qui aspernatur perspiciatis, iure et cum doloribus
        ipsum excepturi impedit! Architecto sed fugiat nostrum. Sapiente
        suscipit accusamus accusantium at atque nemo asperiores eius maxime
        cumque, mollitia exercitationem quia ratione soluta, esse distinctio
        facere sed. Suscipit placeat unde sunt cumque voluptatem error aliquid
        doloremque est deserunt tempora. Ad earum dignissimos perferendis
        incidunt saepe quae, ducimus eaque praesentium quos quasi tempore! Velit
        voluptatum placeat quia, eaque, molestias odit quo repudiandae assumenda
        eligendi voluptates temporibus explicabo quasi id ab eius illo fuga
        iure. Laboriosam pariatur illo nulla similique vitae odio culpa, nostrum
        doloremque maxime laborum, quod nobis illum a amet sequi facere, saepe
        asperiores eligendi ad. Adipisci sequi alias repudiandae corporis nulla
        labore beatae blanditiis velit cupiditate?
      </p>
    </>
  );
}

export default App;
