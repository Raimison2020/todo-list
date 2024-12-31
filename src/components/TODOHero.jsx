function TODOHero({ todos_completed, total_todo }) {
    return (
        <section>
            <div>
                <p>Task Done</p>
                <p>Keep it up</p>
            </div>
            <div>
                {todos_completed}/{total_todo}
            </div>
        </section>
    );
}

export default TODOHero;