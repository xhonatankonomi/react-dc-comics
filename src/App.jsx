import Header from "./components/Header"
import MainContent from "./components/MainContent";
import UtilityBar from "./components/UtilityBar";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />

            <main>
                <MainContent />
                <UtilityBar />
            </main>
            <Footer />
        </>
    )
}

export default App;
