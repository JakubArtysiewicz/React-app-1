import ListElement from "../ListElement";

const AppContainer = () => {

    const notesList = [
        {
            id: 0,
            title: 'Nakarm Kota',
            description: 'Lorem ipsum ... 111',
            date: '16-10-2025',
            isDone: false
        }
        ,
        {
            id: 1,
            title: 'Nakarm Psa',
            description: 'Lorem ipsum ... 222',
            date: '17-10-2025',
            isDone: true
        }
        ,
        {
            id: 2,
            title: 'Nakarm chomika',
            description: 'Lorem ipsum ... 333',
            date: '18-10-2025',
            isDone: false

        }
        ,
        {
            id: 3,
            title: 'Nakarm świnie',
            description: 'Lorem ipsum ... 444',
            date: '18-11-2025',
            isDone: false

        }
    ]
    console.log(notesList);

    return (
        <section className ="text-black bg-amber-200 text-center p-3 border-2">

            <section className ="flex items-center">
                <h1 className = "absolute left-1/2 -translate-x-1/2 text-6xl"> To do app</h1>
                    <button className={"ml-auto bg-amber-950 text-white rounded-xl shadow-xl p-1 m-2"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                        <h3> Dodaj Notatkę </h3>
                    </button>
            </section>

            <ul className ="flex flex-col">
                {
                    notesList.map(
                        (element) => (
                            <ListElement element={element} />
                            // ListElement(element)

                            // <= funkcja a nie komponent reacta
                        )
                    )
                }

            </ul>

        </section>
    )
}
export default AppContainer;






















