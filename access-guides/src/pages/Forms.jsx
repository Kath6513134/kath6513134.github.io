import React from 'react';
import { FileText, Wand2, PenTool, FileStack, List, Compass, SplitSquareHorizontal, LayoutGrid } from 'lucide-react';

const Forms = () => {
    return (
        <div className="container page">
            <header className="page-header">
                <h1><FileText size={28} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Forms</h1>
                <p className="page-intro">
                    Forms provide a user-friendly interface for data entry, viewing, and editing. Instead of typing directly into a table datasheet, users interact with a designed layout with labels, text boxes, buttons, and other controls.
                </p>
            </header>

            {/* Form (default) */}
            <section className="content-section">
                <h2><FileText size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Form</h2>
                <p>The default <strong>Form</strong> tool (found in <em>Create → Form</em>) automatically generates a simple form based on the currently selected table or query. It displays one record at a time in a columnar layout.</p>
                <div className="card example-card" style={{ marginTop: '1rem' }}>
                    <h4>Example</h4>
                    <p>Select the <strong>Students</strong> table, then click <em>Create → Form</em>. Access instantly creates a form showing:</p>
                    <div className="form-preview" style={{ marginTop: '0.75rem' }}>
                        <div className="form-field"><span className="form-label">Student ID:</span> <span className="form-value">1</span></div>
                        <div className="form-field"><span className="form-label">First Name:</span> <span className="form-value">Andi</span></div>
                        <div className="form-field"><span className="form-label">Last Name:</span> <span className="form-value">Pratama</span></div>
                        <div className="form-field"><span className="form-label">Email:</span> <span className="form-value">andi@email.com</span></div>
                        <div className="form-field"><span className="form-label">Major:</span> <span className="form-value">Computer Science</span></div>
                        <div className="form-field"><span className="form-label">GPA:</span> <span className="form-value">3.85</span></div>
                    </div>
                    <p className="example-text">↑ Navigate between records using the record navigation bar at the bottom.</p>
                </div>
                <div className="highlight-box" style={{ marginTop: '1rem' }}>
                    <p>This is the quickest way to create a form. Access automatically includes all fields from the selected table.</p>
                </div>
            </section>

            {/* Form Design */}
            <section className="content-section">
                <h2><PenTool size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Form Design</h2>
                <p><strong>Form Design</strong> gives you a blank canvas and full control. You start from scratch and manually add controls like text boxes, labels, combo boxes, buttons, images, and more.</p>
                <div className="info-grid" style={{ marginTop: '1rem' }}>
                    <div className="card">
                        <h4>Form Sections</h4>
                        <ul className="styled-list">
                            <li><strong>Form Header</strong> — Title, logo, navigation</li>
                            <li><strong>Detail</strong> — Main body with fields/controls</li>
                            <li><strong>Form Footer</strong> — Totals, buttons, info</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h4>Common Controls</h4>
                        <ul className="styled-list">
                            <li><strong>Text Box</strong> — Displays/edits data</li>
                            <li><strong>Combo Box</strong> — Dropdown list</li>
                            <li><strong>List Box</strong> — Scrollable list</li>
                            <li><strong>Command Button</strong> — Triggers actions</li>
                            <li><strong>Subform</strong> — Embeds another form</li>
                        </ul>
                    </div>
                </div>
                <div className="card example-card" style={{ marginTop: '1rem' }}>
                    <h4>Example: Student Registration Form (Design View)</h4>
                    <p>You drag a <em>Combo Box</em> for the "Major" field so users pick from a dropdown (Computer Science, Information Systems, Data Science) instead of typing freely. You add a <em>Command Button</em> labeled "Save & New" that saves the current record and clears the form for the next entry.</p>
                </div>
            </section>

            {/* Blank Form */}
            <section className="content-section">
                <h2><FileStack size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Blank Form</h2>
                <p>A <strong>Blank Form</strong> opens in Layout View with no pre-bound controls. You then drag fields from the <em>Field List</em> pane onto the form.</p>
                <div className="card example-card" style={{ marginTop: '1rem' }}>
                    <h4>Example</h4>
                    <p>You create a Blank Form and drag only <code>FirstName</code>, <code>LastName</code>, and <code>Email</code> from the Students table — creating a simple contact card form without showing GPA or other fields.</p>
                </div>
            </section>

            {/* Form Wizard */}
            <section className="content-section">
                <h2><Wand2 size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Form Wizard</h2>
                <p>The <strong>Form Wizard</strong> walks you through a step-by-step process to create a form:</p>
                <ol className="styled-list numbered" style={{ marginTop: '1rem' }}>
                    <li>Select the table/query and choose which fields to include</li>
                    <li>Choose a layout: Columnar, Tabular, Datasheet, or Justified</li>
                    <li>Name the form and choose whether to open it or modify it in Design View</li>
                </ol>
                <div className="card example-card" style={{ marginTop: '1rem' }}>
                    <h4>Example: Order Entry Wizard</h4>
                    <p>Step 1: Pick the Orders table → include OrderID, CustomerID, Product, Amount, OrderDate fields.</p>
                    <p>Step 2: Choose "Columnar" layout for one-record-at-a-time view.</p>
                    <p>Step 3: Name it "Order Entry Form" → Open it to enter data.</p>
                </div>
            </section>

            {/* Multiple Items */}
            <section className="content-section">
                <h2><List size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Multiple Items</h2>
                <p>A <strong>Multiple Items</strong> form displays multiple records at once in a tabular layout (similar to a datasheet, but with more customization).</p>
                <div className="card example-card" style={{ marginTop: '1rem' }}>
                    <h4>Example</h4>
                    <p>A Multiple Items form for the Students table shows all students in a grid. You can scroll to see everyone, edit any row inline, and even apply conditional formatting (e.g., highlight GPA &gt; 3.80 in green).</p>
                    <div className="table-wrapper" style={{ marginTop: '0.75rem' }}>
                        <table className="styled-table">
                            <thead><tr><th>ID</th><th>Name</th><th>Major</th><th>GPA</th></tr></thead>
                            <tbody>
                                <tr><td>1</td><td>Andi Pratama</td><td>Computer Science</td><td style={{ color: '#16a34a', fontWeight: 600 }}>3.85</td></tr>
                                <tr><td>2</td><td>Siti Nurhaliza</td><td>Information Systems</td><td>3.72</td></tr>
                                <tr><td>3</td><td>Budi Santoso</td><td>Computer Science</td><td>3.50</td></tr>
                                <tr><td>4</td><td>Dewi Lestari</td><td>Data Science</td><td style={{ color: '#16a34a', fontWeight: 600 }}>3.91</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="example-text">↑ GPA values above 3.80 are highlighted in green.</p>
                </div>
            </section>

            {/* Navigation Form */}
            <section className="content-section">
                <h2><Compass size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Navigation Form</h2>
                <p>A <strong>Navigation Form</strong> acts as a main menu or dashboard for your database application. It uses tabs or buttons to navigate between different forms and reports.</p>
                <div className="info-grid" style={{ marginTop: '1rem' }}>
                    <div className="card">
                        <h4>Tab Layouts</h4>
                        <ul className="styled-list">
                            <li>Horizontal Tabs</li>
                            <li>Vertical Tabs, Left</li>
                            <li>Horizontal Tabs and Vertical Tabs</li>
                            <li>Horizontal Tabs, 2 Levels</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h4>Use Cases</h4>
                        <ul className="styled-list">
                            <li>Application-style interface</li>
                            <li>Hiding the Navigation Pane</li>
                            <li>Grouping related forms/reports</li>
                            <li>Providing a clean user experience</li>
                        </ul>
                    </div>
                </div>
                <div className="card example-card" style={{ marginTop: '1rem' }}>
                    <h4>Example: School Database Navigation</h4>
                    <p>Create a Horizontal Tabs navigation form with tabs: <strong>Students</strong> (opens Student Entry Form), <strong>Classes</strong> (opens Class List Form), <strong>Enrollments</strong> (opens Enrollment Form), <strong>Reports</strong> (opens Grade Report). Set this as the startup form in Access Options so it opens automatically.</p>
                </div>
            </section>

            {/* Split Form */}
            <section className="content-section">
                <h2><SplitSquareHorizontal size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Split Form</h2>
                <p>A <strong>Split Form</strong> displays two views simultaneously:</p>
                <ul className="styled-list" style={{ marginTop: '0.5rem' }}>
                    <li>The <strong>top half</strong> shows a single record in Form View (detailed)</li>
                    <li>The <strong>bottom half</strong> shows all records in Datasheet View (grid)</li>
                </ul>
                <div className="card example-card" style={{ marginTop: '1rem' }}>
                    <h4>Example</h4>
                    <p>A Split Form for the Orders table: The <strong>top</strong> shows the details of the selected order (OrderID, Customer, Product, Amount, Date). The <strong>bottom</strong> shows a datasheet listing all orders. Click any row in the datasheet to instantly see its details above.</p>
                </div>
            </section>

            {/* Datasheet (DST) */}
            <section className="content-section">
                <h2><LayoutGrid size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Datasheet (DST)</h2>
                <p>The <strong>Datasheet</strong> view displays data in a spreadsheet-like grid of rows and columns.</p>
                <div className="highlight-box" style={{ marginTop: '1rem' }}>
                    <h4>Key Features</h4>
                    <ul className="styled-list">
                        <li>Quick inline editing of multiple records</li>
                        <li>Sorting and filtering built-in</li>
                        <li>Can be used as a subform inside other forms</li>
                        <li>Best for users comfortable with spreadsheet-style interfaces</li>
                    </ul>
                </div>
                <div className="card example-card" style={{ marginTop: '1rem' }}>
                    <h4>Example: Subform Usage</h4>
                    <p>In a Customer form (single record view), you embed a Datasheet subform at the bottom showing all Orders for that customer. When you navigate to Customer "Andi", the subform automatically filters to show only Andi's orders.</p>
                </div>
            </section>
        </div>
    );
};

export default Forms;
