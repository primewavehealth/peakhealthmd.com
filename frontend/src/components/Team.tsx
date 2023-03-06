import Image from "next/image";

// function Team() {

function Team() {
 return (
  <div className="py-20 bg-gray-50">
   <div className="container px-6 mx-auto md:px-12 xl:px-32">
    <div className="pb-12 text-center lg:pb-24">
     <h2 className="mb-4 text-2xl font-bold text-center text-gray-900 md:text-4xl">
      Our Management Team
     </h2>
     <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
      Meet the top brass of our team. They are highly skilled and experienced
      professionals.
     </p>
    </div>
    <div className="grid gap-12 place-items-center md:grid-cols-3">
     <div className="space-y-4 text-center">
      <Image
       className="flex-shrink-0 object-cover w-40 h-40 rounded-full sm:mx-4 ring-4 ring-gray-300"
       src="https://images.unsplash.com/photo-1488508872907-592763850505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
       width={150}
       alt="team"
       height={150}
      />
      <div>
       <h4 className="text-2xl">Hentoni Doe</h4>
       <span className="block text-sm text-gray-500">CEO</span>
      </div>
     </div>
     <div className="space-y-4 text-center">
      <Image
       className="flex-shrink-0 object-cover w-40 h-40 rounded-full sm:mx-4 ring-4 ring-gray-300"
       src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
       width={150}
       alt="team"
       height={80}
      />
      <div>
       <h4 className="text-2xl">Jonathan Doe</h4>
       <span className="block text-sm text-gray-500">
        Chief Operating Officer
       </span>
      </div>
     </div>
     <div className="space-y-4 text-center">
      <Image
       className="flex-shrink-0 object-cover w-40 h-40 rounded-full sm:mx-4 ring-4 ring-gray-300"
       src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
       alt="team"
       width={250}
       height={250}
      />
      <div>
       <h4 className="text-2xl">Anabelle Doe</h4>
       <span className="block text-sm text-gray-500">
        Chief Medical Director
       </span>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Team;
