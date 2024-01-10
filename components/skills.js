let skillList=()=>{
    return `<div class="skill-category">
    <h3>Languages</h3>
    <ul class="skill-list">
        <li class="skill-item">
            <img src="https://img.icons8.com/?size=1x&id=ETDhNONw82Nc&format=gif" alt="Java Logo">
            Java
        </li>
        <li class="skill-item">
            <img src="https://img.icons8.com/?size=1x&id=tGvHBPJaKqEd&format=gif" alt="JavaScript Logo">
            JavaScript
        </li>
        <li class="skill-item">
            <img src="https://image.shutterstock.com/image-vector/logo-vector-html-5-low-260nw-1601607721.jpg" alt="HTML Logo">
            HTML
        </li>
        <li class="skill-item">
            <img src="https://image.shutterstock.com/image-vector/logo-vector-css-3-low-260nw-1902943426.jpg" alt="Java Logo">
            CSS
        </li>
        <li class="skill-item">
            <img src="https://image.shutterstock.com/image-vector/sql-icon-major-database-format-260nw-1904337712.jpg" alt="Java Logo">
            SQL
        </li>
        <!-- Add more language skills with logos -->
    </ul>
</div>

<div class="skill-category">
    <h3>Frameworks</h3>
    <ul class="skill-list">
        <li class="skill-item">
            <img src="https://img.icons8.com/?size=512&id=VOnRj9vGpXV8&format=png" alt="Selenium Logo">
            Selenium
        </li>
        <li class="skill-item">
            <img src="https://www.cypress.io/images/layouts/cypress-logo.svg" alt="Cypress Logo">
            Cypress
        </li>
        <li class="skill-item">
            <img src="https://w7.pngwing.com/pngs/372/674/png-transparent-appium-test-automation-software-testing-selenium-calabash-purple-violet-text.png" alt="Cypress Logo">
            Appium
        </li>
        <li class="skill-item">
            <img src="https://automationpanda.files.wordpress.com/2017/10/cucumber.png?w=1200" alt="Cypress Logo">
            Cucumber
        </li>
        <li class="skill-item">
            <img src="data:image/png;base64,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" alt="Mocha Logo">
            Mocha
        </li>
        <li class="skill-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Pytest_logo.svg/1200px-Pytest_logo.svg.png" alt="Cypress Logo">
            Pytest
        </li>
        
        <!-- Add more framework skills with logos -->
    </ul>
</div>

<div class="skill-category">
    <h3>Tools</h3>
    <ul class="skill-list">
        <li class="skill-item">
            <img src="https://img.icons8.com/?size=1x&id=oROcPah5ues6&format=png" alt="Jira Logo">
            Jira
        </li>
        <li class="skill-item">
            <img src="https://img.icons8.com/?size=512&id=QEQQKirln6Tf&format=png" alt="Postman Logo">
            Postman
        </li>
        <li class="skill-item">
            <img src="https://jmeter.apache.org/images/jmeter_square.svg" alt="Postman Logo">
           Apache JMeter
        </li>
        <li class="skill-item">
            <img src="https://www.soapui.org/soapui/media/images/stories/homepage/Features/soapUI-logo.png" alt="Postman Logo">
            SoapUI
        </li>
        <li class="skill-item">
            <img src="https://static.javatpoint.com/tutorial/testng/images/testng-tutorial.png" alt="Postman Logo">
            TestNG
        </li>
        <li class="skill-item">
            <img src="https://cdn-icons-png.flaticon.com/512/4494/4494740.png" alt="Postman Logo">
            Git
        </li>
        <li class="skill-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUdgbvzEwaP7VGWv0YSO6q-e8LdWxxTD9ngtuu7TZAw&s" alt="Postman Logo">
            Zephyr
        </li>
        <!-- Add more tool skills with logos -->
    </ul>
</div>`
}

export {skillList};