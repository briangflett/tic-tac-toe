import Link from "next/link"

function HomePage() {
  return (
    <>
      This is the Home Page. 
      To play Tic Tac Toe, go to <Link href="/tic-tac-toe">Tic Tac Toe</Link>
      <br />
      To play Connect Four, go to <Link href="/connect-four">Connect Four</Link>
      <br />
      To update Settings, go to <Link href="/settings">Settings</Link>
    </>
  )
}

export default HomePage;