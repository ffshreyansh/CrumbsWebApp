import Nav from '../components/Nav'
import AuthModal from "../components/AuthModal"
import {useState} from 'react'
import {useCookies} from "react-cookie"

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const authToken = cookies.AuthToken

    const handleClick = () => {
        if (authToken) {
            removeCookie('UserId', cookies.UserId)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload()
            return
        }
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        // <div className="overlay">
            // <Nav
            //     authToken={authToken}
            //     minimal={false}
            //     setShowModal={setShowModal}
            //     showModal={showModal}
            //     setIsSignUp={setIsSignUp}
            // />
        //     <div className="home">
        //         <h1 className="primary-title">Swipe Right®</h1>
        //         <button className="primary-button" onClick={handleClick}>
        //             {authToken ? 'Signout' : 'Create Account'}
        //         </button>


                // {showModal && (
                //     <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
                // )}
        //     </div>
        // </div>
        <>
         {showModal && (
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
                )}
         <Nav
                authToken={authToken}               
                setShowModal={setShowModal}
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />
            
        <section className={`w-full flex-col absolute top-36 hm ${showModal ? 'overlay' : ''}`}>
        <div className="mb-10">
        <h1 className="font-medium text-center lg:text-8xl md:text-5xl sm:text-4xl text-3xl">
        Quick, Simple, and Safe Matchmaker!
</h1>

          <div className="flex items-center gap-4 justify-center mt-14">
            <button type="button" className="rounded-full bg-black text-white py-3 px-12 font-semibold" onClick={handleClick}>Get Started</button>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-8 lg:p-16"> 
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1613505305164-b6b0dae28801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1614937899505-f28f3b53fec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1528123778681-01e39b42808e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
        </div>
        
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1663051303500-c85bef3f05f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1661775317533-2163ba4dbc93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1613505305164-b6b0dae28801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1614937899505-f28f3b53fec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1528123778681-01e39b42808e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
        </div>
        
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1663051303500-c85bef3f05f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1661775317533-2163ba4dbc93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1663051303500-c85bef3f05f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1661775317533-2163ba4dbc93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" alt=""/>
        </div>
        
    </div>
    
      </section>
      </>
    )
}
export default Home
