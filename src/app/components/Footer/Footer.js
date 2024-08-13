export default function Footer(){
  return (
    <footer className="bg-blue-500 flex justify-between items-center py-3 px-5 text-white">
      <div className="">
        <p>Copyright &copy; 2024</p>
      </div>
      <div className="">
        <nav>
          <ul className="flex gap-x-2">
            <li>Linkedin</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}