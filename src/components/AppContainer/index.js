import ListElement from "./ListElement";

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
        <section className ="text-black bg-amber-200 text-center p-3 border-2  ">
            <h1 className ="text-6xl"> To do app</h1>
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






















