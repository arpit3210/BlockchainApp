import {Navbar, Welcome, Footer, Services, Transactions, Loader  } from "./components"

export default function App() {
  return (
    <div className="min-h-screen">
<div className="gradient-bg-welcome">

<Navbar></Navbar>
<Welcome></Welcome>

</div>

<Services></Services>
<Transactions></Transactions>
<Footer></Footer>

    </div>
  )
}