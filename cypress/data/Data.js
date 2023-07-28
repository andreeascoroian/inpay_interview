export function readCsvFile() {
    return cy.readFile('cypress/fixtures/inpay_interview_login_users.csv').then((csvData) => {
        const rows = csvData.split('\n');
        const headers = rows[0].split(',');

        // Initialize an array to store the parsed data
        const data = [];

        // Loop through rows (excluding the header row)
        rows.slice(1).forEach((row) => {
            const rowData = row.split(',');
            const entry = {};
            headers.forEach((header, index) => {
                entry[header] = rowData[index];
            });
            data.push(entry);
        });

        // Save the data in a Cypress environment variable
        Cypress.env('csvData', data);
    });
}
