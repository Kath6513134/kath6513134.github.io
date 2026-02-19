import React from 'react';
import { Search, Wand2, PenTool, Zap, Columns, SlidersHorizontal } from 'lucide-react';

const Queries = () => {
    return (
        <div className="container page">
            <header className="page-header">
                <h1><Search size={28} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Queries</h1>
                <p className="page-intro">
                    Queries allow you to ask questions of your data, filter records, perform calculations, and even modify data in bulk. They are the "logic" layer of your database.
                </p>
            </header>

            {/* Query Wizard */}
            <section className="content-section">
                <h2><Wand2 size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Query Wizard</h2>
                <p>The <strong>Query Wizard</strong> walks you through building a query step by step. Access provides several wizards:</p>
                <div className="info-grid" style={{ marginTop: '1rem' }}>
                    <div className="card">
                        <h4>Simple Query Wizard</h4>
                        <p>Select fields from one or more tables. Optionally create a summary with totals.</p>
                    </div>
                    <div className="card">
                        <h4>Crosstab Query Wizard</h4>
                        <p>Creates a spreadsheet-like summary with row headers, column headers, and calculated values.</p>
                    </div>
                    <div className="card">
                        <h4>Find Duplicates Wizard</h4>
                        <p>Locates records with duplicate values in a specific field.</p>
                    </div>
                    <div className="card">
                        <h4>Find Unmatched Wizard</h4>
                        <p>Finds records in one table with no corresponding records in another.</p>
                    </div>
                </div>
                <div className="card example-card" style={{ marginTop: '1rem' }}>
                    <h4>Example: Simple Query Wizard</h4>
                    <p>You select the <strong>Students</strong> table → pick the fields <code>FirstName</code>, <code>LastName</code>, <code>Major</code>, <code>GPA</code> → choose "Detail" → name it "Student List Query". The result:</p>
                    <div className="table-wrapper" style={{ marginTop: '0.75rem' }}>
                        <table className="styled-table">
                            <thead><tr><th>FirstName</th><th>LastName</th><th>Major</th><th>GPA</th></tr></thead>
                            <tbody>
                                <tr><td>Andi</td><td>Pratama</td><td>Computer Science</td><td>3.85</td></tr>
                                <tr><td>Siti</td><td>Nurhaliza</td><td>Information Systems</td><td>3.72</td></tr>
                                <tr><td>Budi</td><td>Santoso</td><td>Computer Science</td><td>3.50</td></tr>
                                <tr><td>Dewi</td><td>Lestari</td><td>Data Science</td><td>3.91</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Query Design */}
            <section className="content-section">
                <h2><PenTool size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Query Design</h2>
                <p><strong>Query Design View</strong> (the QBE — Query By Example grid) gives you full control. The grid has several key rows:</p>

                <div className="data-type-list" style={{ marginTop: '1rem' }}>
                    {[
                        { name: 'Field', desc: 'The field name you want to include in the query results (e.g., FirstName, OrderDate).' },
                        { name: 'Table', desc: 'The table (or query) that the field belongs to.' },
                        { name: 'Sort', desc: 'Sort order: Ascending, Descending, or (not sorted).' },
                        { name: 'Show', desc: 'Checkbox — whether to display this field in the results. Uncheck to use for filtering only.' },
                        { name: 'Criteria', desc: 'The filter condition (e.g., "London", >100, Like "J*").' },
                        { name: 'Or', desc: 'Additional criteria. Same row = AND. Different rows = OR.' }
                    ].map((item) => (
                        <div key={item.name} className="data-type-item">
                            <strong>{item.name}</strong>
                            <span>{item.desc}</span>
                        </div>
                    ))}
                </div>

                {/* QBE Example */}
                <h3 style={{ marginTop: '2rem' }}>Example: "CS Students with High GPA"</h3>
                <p>Find all Computer Science students with a GPA above 3.70, sorted alphabetically:</p>
                <div className="table-wrapper" style={{ marginTop: '0.75rem' }}>
                    <table className="styled-table">
                        <thead><tr><th>Field:</th><th>FirstName</th><th>LastName</th><th>Major</th><th>GPA</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Table:</strong></td><td>Students</td><td>Students</td><td>Students</td><td>Students</td></tr>
                            <tr><td><strong>Sort:</strong></td><td>Ascending</td><td></td><td></td><td>Descending</td></tr>
                            <tr><td><strong>Show:</strong></td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
                            <tr><td><strong>Criteria:</strong></td><td></td><td></td><td>"Computer Science"</td><td>&gt;3.70</td></tr>
                            <tr><td><strong>Or:</strong></td><td></td><td></td><td></td><td></td></tr>
                        </tbody>
                    </table>
                </div>
                <p style={{ marginTop: '0.5rem' }}>Result:</p>
                <div className="table-wrapper" style={{ marginTop: '0.25rem' }}>
                    <table className="styled-table">
                        <thead><tr><th>FirstName</th><th>LastName</th><th>Major</th><th>GPA</th></tr></thead>
                        <tbody>
                            <tr><td>Andi</td><td>Pratama</td><td>Computer Science</td><td>3.85</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* OR example */}
                <h3 style={{ marginTop: '2rem' }}>Example: Using OR</h3>
                <p>Find students in Computer Science <strong>OR</strong> Data Science:</p>
                <div className="table-wrapper" style={{ marginTop: '0.75rem' }}>
                    <table className="styled-table">
                        <thead><tr><th>Field:</th><th>FirstName</th><th>LastName</th><th>Major</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Table:</strong></td><td>Students</td><td>Students</td><td>Students</td></tr>
                            <tr><td><strong>Show:</strong></td><td>✓</td><td>✓</td><td>✓</td></tr>
                            <tr><td><strong>Criteria:</strong></td><td></td><td></td><td>"Computer Science"</td></tr>
                            <tr><td><strong>Or:</strong></td><td></td><td></td><td>"Data Science"</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 style={{ marginTop: '2rem' }}>Criteria Syntax Reference</h3>
                <div className="table-wrapper" style={{ marginTop: '0.75rem' }}>
                    <table className="styled-table">
                        <thead><tr><th>Goal</th><th>Criteria Syntax</th><th>Example</th></tr></thead>
                        <tbody>
                            <tr><td>Exact Match</td><td><code>"value"</code></td><td><code>"Jakarta"</code></td></tr>
                            <tr><td>Starts with</td><td><code>Like "X*"</code></td><td><code>Like "A*"</code> → Andi, Ahmad</td></tr>
                            <tr><td>Contains</td><td><code>Like "*X*"</code></td><td><code>Like "*an*"</code> → Andi, Santoso</td></tr>
                            <tr><td>Greater than</td><td><code>&gt;value</code></td><td><code>&gt;3.5</code></td></tr>
                            <tr><td>Between</td><td><code>Between X And Y</code></td><td><code>Between #1/1/2024# And #12/31/2024#</code></td></tr>
                            <tr><td>Empty</td><td><code>Is Null</code></td><td>Find records with no email</td></tr>
                            <tr><td>Not empty</td><td><code>Is Not Null</code></td><td>Find records that have an email</td></tr>
                            <tr><td>Not equal</td><td><code>&lt;&gt;"value"</code></td><td><code>&lt;&gt;"Jakarta"</code></td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Totals */}
            <section className="content-section">
                <h2><SlidersHorizontal size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Totals (Aggregate Functions)</h2>
                <p>The <strong>Totals</strong> row (enabled via the <em>Σ Totals</em> button) allows you to use aggregate functions:</p>
                <div className="data-type-list" style={{ marginTop: '1rem' }}>
                    {[
                        { name: 'Group By', desc: 'Groups records by this field (like categories).' },
                        { name: 'Sum', desc: 'Calculates the total of numeric values.' },
                        { name: 'Avg', desc: 'Calculates the average.' },
                        { name: 'Count', desc: 'Counts the number of records.' },
                        { name: 'Min', desc: 'Finds the smallest value.' },
                        { name: 'Max', desc: 'Finds the largest value.' },
                        { name: 'Where', desc: 'Used for filtering without displaying or grouping.' }
                    ].map((item) => (
                        <div key={item.name} className="data-type-item">
                            <strong>{item.name}</strong>
                            <span>{item.desc}</span>
                        </div>
                    ))}
                </div>

                <h3 style={{ marginTop: '2rem' }}>Example: Average GPA by Major</h3>
                <div className="table-wrapper" style={{ marginTop: '0.75rem' }}>
                    <table className="styled-table">
                        <thead><tr><th>Field:</th><th>Major</th><th>GPA</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Total:</strong></td><td>Group By</td><td>Avg</td></tr>
                            <tr><td><strong>Show:</strong></td><td>✓</td><td>✓</td></tr>
                        </tbody>
                    </table>
                </div>
                <p style={{ marginTop: '0.5rem' }}>Result:</p>
                <div className="table-wrapper" style={{ marginTop: '0.25rem' }}>
                    <table className="styled-table">
                        <thead><tr><th>Major</th><th>AvgOfGPA</th></tr></thead>
                        <tbody>
                            <tr><td>Computer Science</td><td>3.68</td></tr>
                            <tr><td>Data Science</td><td>3.91</td></tr>
                            <tr><td>Information Systems</td><td>3.72</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 style={{ marginTop: '2rem' }}>Example: Count Students per Major (Where GPA &gt; 3.5)</h3>
                <div className="table-wrapper" style={{ marginTop: '0.75rem' }}>
                    <table className="styled-table">
                        <thead><tr><th>Field:</th><th>Major</th><th>StudentID</th><th>GPA</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Total:</strong></td><td>Group By</td><td>Count</td><td>Where</td></tr>
                            <tr><td><strong>Show:</strong></td><td>✓</td><td>✓</td><td>☐</td></tr>
                            <tr><td><strong>Criteria:</strong></td><td></td><td></td><td>&gt;3.5</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="example-text">↑ GPA is used as a filter (Where) but not shown in the results. Show is unchecked.</p>
            </section>

            {/* Parameters */}
            <section className="content-section">
                <h2><Columns size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Parameters</h2>
                <p>A <strong>Parameter Query</strong> prompts the user for input each time the query runs. Use square brackets with a prompt message in the Criteria row.</p>
                <div className="card example-card" style={{ marginTop: '1rem' }}>
                    <h4>Example: Search by Major</h4>
                    <div className="table-wrapper" style={{ marginTop: '0.75rem' }}>
                        <table className="styled-table">
                            <thead><tr><th>Field:</th><th>FirstName</th><th>LastName</th><th>Major</th><th>GPA</th></tr></thead>
                            <tbody>
                                <tr><td><strong>Criteria:</strong></td><td></td><td></td><td>[Enter the major:]</td><td></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p style={{ marginTop: '0.75rem' }}>When you run this query, a dialog box appears: <strong>"Enter the major:"</strong></p>
                    <p>If the user types <code>Computer Science</code>, the results show only CS students.</p>
                </div>
                <div className="card example-card" style={{ marginTop: '1rem' }}>
                    <h4>Example: Search by GPA Range</h4>
                    <p>Use two parameters to filter between values:</p>
                    <p style={{ marginTop: '0.5rem' }}>Criteria for GPA: <code>Between [Enter minimum GPA:] And [Enter maximum GPA:]</code></p>
                    <p style={{ marginTop: '0.5rem' }}>The user gets two dialog boxes and can type, for example, <code>3.5</code> and <code>4.0</code>.</p>
                </div>
            </section>

            {/* Action Queries */}
            <section className="content-section">
                <h2><Zap size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Action Queries</h2>
                <p>Unlike Select Queries (which only display data), <strong>Action Queries</strong> modify data in your tables.</p>

                <div style={{ display: 'grid', gap: '1.25rem', marginTop: '1.5rem' }}>
                    <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
                        <h4>Update Query</h4>
                        <p>Changes existing data in one or more fields across multiple records at once.</p>
                        <div className="card example-card" style={{ marginTop: '0.75rem', boxShadow: 'none', border: '1px dashed #ccc' }}>
                            <h4>Example: Increase All GPAs by 0.1</h4>
                            <p>Update To: <code>[GPA]+0.1</code></p>
                            <p>Criteria for GPA: <code>&lt;4.0</code> (only students below 4.0)</p>
                        </div>
                    </div>

                    <div className="card" style={{ borderTop: '4px solid #dc2626' }}>
                        <h4>Delete Query</h4>
                        <p>Removes entire records that match specific criteria. <strong>Cannot be undone!</strong></p>
                        <div className="card example-card" style={{ marginTop: '0.75rem', boxShadow: 'none', border: '1px dashed #ccc' }}>
                            <h4>Example: Delete Inactive Students</h4>
                            <p>Delete from table: <code>Students</code></p>
                            <p>Criteria for IsActive: <code>No</code></p>
                        </div>
                    </div>

                    <div className="card" style={{ borderTop: '4px solid var(--secondary)' }}>
                        <h4>Append Query</h4>
                        <p>Copies records from one table and adds them to another existing table.</p>
                        <div className="card example-card" style={{ marginTop: '0.75rem', boxShadow: 'none', border: '1px dashed #ccc' }}>
                            <h4>Example: Archive Graduated Students</h4>
                            <p>Append records from <code>Students</code> to <code>GraduatedStudents</code></p>
                            <p>Criteria for Status: <code>"Graduated"</code></p>
                        </div>
                    </div>

                    <div className="card" style={{ borderTop: '4px solid var(--accent)' }}>
                        <h4>Make Table Query</h4>
                        <p>Creates a brand-new table from the results of a query.</p>
                        <div className="card example-card" style={{ marginTop: '0.75rem', boxShadow: 'none', border: '1px dashed #ccc' }}>
                            <h4>Example: Create "HonorStudents" Table</h4>
                            <p>Make table: <code>HonorStudents</code></p>
                            <p>Criteria for GPA: <code>&gt;=3.75</code></p>
                            <p>Result: A new table "HonorStudents" is created with Andi (3.85) and Dewi (3.91).</p>
                        </div>
                    </div>

                    <div className="card" style={{ borderTop: '4px solid #8b5cf6' }}>
                        <h4>Crosstab Query</h4>
                        <p>Summarizes data in a spreadsheet-like grid with row headings, column headings, and a calculated value.</p>
                        <div className="card example-card" style={{ marginTop: '0.75rem', boxShadow: 'none', border: '1px dashed #ccc' }}>
                            <h4>Example: Order Count per Customer per Month</h4>
                            <p>Row Heading: <code>CustomerName</code>, Column Heading: <code>OrderMonth</code>, Value: <code>Count(OrderID)</code></p>
                            <div className="table-wrapper" style={{ marginTop: '0.5rem' }}>
                                <table className="styled-table">
                                    <thead><tr><th>CustomerName</th><th>Jan</th><th>Feb</th><th>Mar</th></tr></thead>
                                    <tbody>
                                        <tr><td>Andi</td><td>3</td><td>1</td><td>2</td></tr>
                                        <tr><td>Siti</td><td>1</td><td>2</td><td>0</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Queries;
