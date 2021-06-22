var courses = [{ school: "HENRY BOOTCAMP", title: "Full Stack Developer", description: "It is a highly challenging bootcamp, and intensive. I've coded in it more than 400 hours working with some the javascript related tools ", institution: "https://soyhenry.com/" }, { school: "Udemy", title: "Full Web Development", description: "Enrrolled since Jan. 2020 To 2021. I've created a serie of real projects using some tools such as HTML, CSS, JS", institution: "https://www.udemy.com/certificate/UC-e0a7cd15-26e8-4b24-a53a-d6a70856f43e/" }, { school: "Siglo 21 University", title: "Marketing Degree", description: "Taking up electives in Digital Marketing", institution: "https://21.edu.ar/" }, { school: "efset", title: " EF Standard English Test", description: " Result: C2 PROFICIENT", institution: "https://www.efset.org/cert/442DZh" }]

export default function Education() {
    return (
        <>
            <h2>Educational Training</h2>
            <div class="education col-3">
                {
                    courses.map(i =>
                        <div>
                            <h2>{i.school}</h2>
                            <h3>{i.title}</h3>
                            <p>{i.description}</p>
                            <a href={i.institution}>Institution</a>
                        </div>
                    )
                }
            </div>
        </>
    )
}