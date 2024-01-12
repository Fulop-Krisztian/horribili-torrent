import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PostContainer from "./Posts/PostContainer"
import Welcome from "./Welcome";

const renderposts = true

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <PostContainer renderposts={renderposts}/>
        <Welcome renderposts={renderposts}/>
      </main>
      <Footer />
    </>
  );
}

export default App
