import React from 'react';
import { Table, Eye, Settings, Key, Type, List } from 'lucide-react';

const Tables = () => {
    return (
        <div className="container page">
            <header className="page-header">
                <h1><Table size={28} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Tables</h1>
                <p className="page-intro">
                    Tables are the <strong>foundation</strong> of any Access database. They store all of your data in a structured format of rows (records) and columns (fields).
                </p>
            </header>

            {/* Records & Fields */}
            <section className="content-section">
                <h2><List size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Records & Fields</h2>
                <div className="info-grid">
                    <div className="card">
                        <h4>Records (Rows)</h4>
                        <p>Each row represents a single entry or item. For example, one customer, one product, or one transaction.</p>
                    </div>
                    <div className="card">
                        <h4>Fields (Columns)</h4>
                        <p>Each column represents a specific piece of information about that item. For example: First Name, Last Name, Email, Phone Number.</p>
                    </div>
                </div>

                <div className="highlight-box" style={{ marginTop: '1.5rem' }}>
                    <h4><Key size={18} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Primary Key</h4>
                    <p>A <strong>Primary Key</strong> is a field (or combination of fields) that uniquely identifies each record in a table. It prevents duplicate entries. Typically, an <code>ID</code> field with the <em>AutoNumber</em> data type is used.</p>
                </div>

                {/* Example Table */}
                <h3 style={{ marginTop: '2rem' }}>Example: Students Table</h3>
                <div className="table-wrapper" style={{ marginTop: '0.75rem' }}>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>StudentID (PK)</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>Major</th>
                                <th>GPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>1</td><td>Andi</td><td>Pratama</td><td>andi@email.com</td><td>Computer Science</td><td>3.85</td></tr>
                            <tr><td>2</td><td>Siti</td><td>Nurhaliza</td><td>siti@email.com</td><td>Information Systems</td><td>3.72</td></tr>
                            <tr><td>3</td><td>Budi</td><td>Santoso</td><td>budi@email.com</td><td>Computer Science</td><td>3.50</td></tr>
                            <tr><td>4</td><td>Dewi</td><td>Lestari</td><td>dewi@email.com</td><td>Data Science</td><td>3.91</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="example-text">↑ Each row is one student (record). Each column is a field. StudentID is the Primary Key (AutoNumber).</p>
            </section>

            {/* Design View */}
            <section className="content-section">
                <h2><Eye size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Design View</h2>
                <p>Design View is where you define the <strong>structure</strong> of your table — not the data itself. Here you specify:</p>
                <div className="info-grid" style={{ marginTop: '1rem' }}>
                    <div className="card">
                        <h4>Field Name</h4>
                        <p>The label for each column (e.g., <code>FirstName</code>, <code>OrderDate</code>, <code>Price</code>).</p>
                    </div>
                    <div className="card">
                        <h4>Data Type</h4>
                        <p>What kind of data the field will hold (Short Text, Number, Date/Time, Currency, Yes/No, AutoNumber, etc.).</p>
                    </div>
                    <div className="card">
                        <h4>Description</h4>
                        <p>An optional note to explain what this field is for. Appears in the status bar when the user is in that field.</p>
                    </div>
                </div>

                {/* Design View Example */}
                <h3 style={{ marginTop: '2rem' }}>Example: Students Table in Design View</h3>
                <div className="table-wrapper" style={{ marginTop: '0.75rem' }}>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Field Name</th>
                                <th>Data Type</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>🔑 StudentID</td><td>AutoNumber</td><td>Primary Key, auto-generated</td></tr>
                            <tr><td>FirstName</td><td>Short Text</td><td>Student's first name</td></tr>
                            <tr><td>LastName</td><td>Short Text</td><td>Student's last name</td></tr>
                            <tr><td>Email</td><td>Short Text</td><td>Student's email address</td></tr>
                            <tr><td>Major</td><td>Short Text</td><td>Study program</td></tr>
                            <tr><td>GPA</td><td>Number (Double)</td><td>Grade Point Average (0.00 – 4.00)</td></tr>
                            <tr><td>EnrollmentDate</td><td>Date/Time</td><td>Date the student enrolled</td></tr>
                            <tr><td>IsActive</td><td>Yes/No</td><td>Currently enrolled?</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 style={{ marginTop: '2rem' }}>Common Data Types</h3>
                <div className="data-type-list">
                    {[
                        { name: 'Short Text', desc: 'Alphanumeric characters, up to 255 characters. Names, titles, etc.' },
                        { name: 'Long Text', desc: 'Longer text or combinations of text and numbers. Memos, descriptions.' },
                        { name: 'Number', desc: 'Numeric data for mathematical calculations.' },
                        { name: 'Date/Time', desc: 'Date and time values.' },
                        { name: 'Currency', desc: 'Monetary values. Prevents rounding errors in calculations.' },
                        { name: 'AutoNumber', desc: 'Automatically generates a unique sequential number. Ideal for Primary Keys.' },
                        { name: 'Yes/No', desc: 'Boolean values (True/False, On/Off).' },
                        { name: 'OLE Object', desc: 'Embedded objects like images, audio, or documents.' },
                        { name: 'Hyperlink', desc: 'Web addresses or links to files.' },
                        { name: 'Attachment', desc: 'Attach files (images, documents) directly to a record.' },
                        { name: 'Lookup Wizard', desc: 'Creates a dropdown list that pulls values from another table or a fixed list.' }
                    ].map((type) => (
                        <div key={type.name} className="data-type-item">
                            <strong>{type.name}</strong>
                            <span>{type.desc}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Properties */}
            <section className="content-section">
                <h2><Settings size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Field Properties</h2>
                <p>In Design View, the bottom panel shows <strong>Field Properties</strong> for the selected field. These control data validation and formatting.</p>

                {/* Properties Example */}
                <h3 style={{ marginTop: '1.5rem' }}>Example: Properties for GPA Field</h3>
                <div className="table-wrapper" style={{ marginTop: '0.75rem' }}>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>Value</th>
                                <th>Explanation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Field Size</td><td>Double</td><td>Allows decimal numbers</td></tr>
                            <tr><td>Format</td><td>Fixed</td><td>Shows as 3.85, not 3.8500001</td></tr>
                            <tr><td>Decimal Places</td><td>2</td><td>Always shows 2 decimal digits</td></tr>
                            <tr><td>Caption</td><td>Grade Point Average</td><td>Label shown in forms/reports</td></tr>
                            <tr><td>Default Value</td><td>0</td><td>New records start with GPA = 0</td></tr>
                            <tr><td>Validation Rule</td><td>&gt;=0 And &lt;=4</td><td>Must be between 0 and 4</td></tr>
                            <tr><td>Validation Text</td><td>GPA must be between 0.00 and 4.00</td><td>Error message if rule is violated</td></tr>
                            <tr><td>Required</td><td>Yes</td><td>Cannot be left blank</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 style={{ marginTop: '2rem' }}>All Field Properties</h3>
                <div className="data-type-list" style={{ marginTop: '1rem' }}>
                    {[
                        { name: 'Field Size', desc: 'Maximum number of characters (for Text) or numeric range (for Number).' },
                        { name: 'Format', desc: 'Controls how data is displayed (e.g., Short Date, Currency, Percent).' },
                        { name: 'Input Mask', desc: 'A template that forces a specific format during data entry (e.g., phone number: (999) 000-0000).' },
                        { name: 'Caption', desc: 'A label shown instead of the field name in forms and reports.' },
                        { name: 'Default Value', desc: 'A value automatically entered when a new record is created.' },
                        { name: 'Validation Rule', desc: 'An expression that restricts what data can be entered (e.g., >=0 for positive numbers).' },
                        { name: 'Validation Text', desc: 'Error message shown when the Validation Rule is violated.' },
                        { name: 'Required', desc: 'If set to Yes, the field cannot be left blank.' },
                        { name: 'Indexed', desc: 'Speeds up searches and sorting on this field. Can enforce uniqueness.' }
                    ].map((prop) => (
                        <div key={prop.name} className="data-type-item">
                            <strong>{prop.name}</strong>
                            <span>{prop.desc}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Tables;
