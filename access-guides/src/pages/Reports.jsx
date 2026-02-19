import React from 'react';
import { BarChart3, Wand2, PenTool, Printer, Eye, LayoutGrid } from 'lucide-react';

const Reports = () => {
    return (
        <div className="container page">
            <header className="page-header">
                <h1><BarChart3 size={28} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Reports</h1>
                <p className="page-intro">
                    Reports are designed for <strong>printing and presenting</strong> data. While forms are for on-screen interaction, reports format data for paper or PDF output with grouping, sorting, totals, and professional layouts.
                </p>
            </header>

            {/* Creating Reports */}
            <section className="content-section">
                <h2>Creating Reports</h2>
                <div className="info-grid" style={{ marginTop: '1rem' }}>
                    <div className="card">
                        <BarChart3 size={32} color="var(--primary)" style={{ marginBottom: '0.5rem' }} />
                        <h4>Report (Auto)</h4>
                        <p>Instantly creates a report based on the selected table or query. Quick and automatic.</p>
                    </div>
                    <div className="card">
                        <Wand2 size={32} color="var(--primary)" style={{ marginBottom: '0.5rem' }} />
                        <h4>Report Wizard</h4>
                        <p>Step-by-step guide: choose fields, grouping levels, sort order, and layout style.</p>
                    </div>
                    <div className="card">
                        <PenTool size={32} color="var(--primary)" style={{ marginBottom: '0.5rem' }} />
                        <h4>Report Design</h4>
                        <p>Full manual control. Build from scratch with headers, footers, calculated fields, and custom formatting.</p>
                    </div>
                    <div className="card">
                        <LayoutGrid size={32} color="var(--primary)" style={{ marginBottom: '0.5rem' }} />
                        <h4>Blank Report</h4>
                        <p>Starts with an empty canvas in Layout View. Drag fields from the Field List to build your report.</p>
                    </div>
                </div>
            </section>

            {/* Report Wizard Example */}
            <section className="content-section">
                <h2><Wand2 size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Report Wizard Example</h2>
                <p>Creating a "Student Report Grouped by Major":</p>
                <ol className="styled-list numbered" style={{ marginTop: '1rem' }}>
                    <li>Select fields: <code>FirstName</code>, <code>LastName</code>, <code>Major</code>, <code>GPA</code> from the Students table</li>
                    <li>Add grouping by: <code>Major</code></li>
                    <li>Sort by: <code>GPA</code> (Descending) — highest GPA first within each major</li>
                    <li>Choose layout: Stepped, Landscape orientation</li>
                    <li>Name: "Student Report by Major"</li>
                </ol>

                <h4 style={{ marginTop: '1.5rem' }}>Expected Output:</h4>
                <div className="report-preview" style={{ marginTop: '0.75rem' }}>
                    <div className="report-header-section">
                        <h3 style={{ textAlign: 'center', margin: 0 }}>Student Report by Major</h3>
                        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>Printed: 19 Feb 2026</p>
                    </div>
                    <div className="report-group">
                        <div className="report-group-header">Major: Computer Science</div>
                        <div className="table-wrapper">
                            <table className="styled-table">
                                <thead><tr><th>First Name</th><th>Last Name</th><th>GPA</th></tr></thead>
                                <tbody>
                                    <tr><td>Andi</td><td>Pratama</td><td>3.85</td></tr>
                                    <tr><td>Budi</td><td>Santoso</td><td>3.50</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="report-group-footer">Average GPA: 3.68 | Count: 2 students</div>
                    </div>
                    <div className="report-group">
                        <div className="report-group-header">Major: Data Science</div>
                        <div className="table-wrapper">
                            <table className="styled-table">
                                <thead><tr><th>First Name</th><th>Last Name</th><th>GPA</th></tr></thead>
                                <tbody>
                                    <tr><td>Dewi</td><td>Lestari</td><td>3.91</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="report-group-footer">Average GPA: 3.91 | Count: 1 student</div>
                    </div>
                    <div className="report-group">
                        <div className="report-group-header">Major: Information Systems</div>
                        <div className="table-wrapper">
                            <table className="styled-table">
                                <thead><tr><th>First Name</th><th>Last Name</th><th>GPA</th></tr></thead>
                                <tbody>
                                    <tr><td>Siti</td><td>Nurhaliza</td><td>3.72</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="report-group-footer">Average GPA: 3.72 | Count: 1 student</div>
                    </div>
                    <div className="report-grand-footer">Grand Total: 4 students | Overall Average GPA: 3.75</div>
                </div>
            </section>

            {/* Report Sections */}
            <section className="content-section">
                <h2>Report Sections</h2>
                <div className="data-type-list" style={{ marginTop: '1rem' }}>
                    {[
                        { name: 'Report Header', desc: 'Appears once at the very top. Used for titles, logos, or a cover page.' },
                        { name: 'Page Header', desc: 'Appears at the top of every page. Commonly used for column headings.' },
                        { name: 'Group Header', desc: 'Appears at the start of each group. Shows the group name (e.g., Major).' },
                        { name: 'Detail', desc: 'The main section — repeats once for each record.' },
                        { name: 'Group Footer', desc: 'End of each group. Used for subtotals and group summaries.' },
                        { name: 'Page Footer', desc: 'Bottom of every page. Often contains page numbers and dates.' },
                        { name: 'Report Footer', desc: 'Once at the very end. Used for grand totals and final summaries.' }
                    ].map((section) => (
                        <div key={section.name} className="data-type-item">
                            <strong>{section.name}</strong>
                            <span>{section.desc}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Views */}
            <section className="content-section">
                <h2><Eye size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Report Views</h2>
                <div className="info-grid" style={{ marginTop: '1rem' }}>
                    <div className="card">
                        <h4>Report View</h4>
                        <p>On-screen preview. Can filter and search data.</p>
                    </div>
                    <div className="card">
                        <h4>Print Preview</h4>
                        <p>Shows exactly how the report will look when printed.</p>
                    </div>
                    <div className="card">
                        <h4>Layout View</h4>
                        <p>Edit the design while seeing live data.</p>
                    </div>
                    <div className="card">
                        <h4>Design View</h4>
                        <p>Full structural control with sections and properties.</p>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="content-section">
                <h2><Printer size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Key Features</h2>
                <ul className="styled-list">
                    <li><strong>Grouping & Sorting:</strong> Group records by a field (e.g., Major) and sort within each group.</li>
                    <li><strong>Calculated Controls:</strong> Use expressions like <code>=Sum([Amount])</code> or <code>=Count(*)</code> for totals.</li>
                    <li><strong>Page Numbers:</strong> Use <code>=Page</code> and <code>=Pages</code> to show "Page X of Y".</li>
                    <li><strong>Current Date:</strong> Use <code>=Now()</code> or <code>=Date()</code> to print the current date.</li>
                    <li><strong>Conditional Formatting:</strong> Highlight records based on rules (e.g., red text for GPA &lt; 3.0).</li>
                    <li><strong>Export:</strong> Reports can be exported to PDF, XPS, Excel, Word, or printed directly.</li>
                </ul>
                <div className="card example-card" style={{ marginTop: '1rem' }}>
                    <h4>Example: Calculated Control in Report Footer</h4>
                    <p>In the Group Footer for "Major", add a text box with:</p>
                    <code className="code-block">=Avg([GPA])</code>
                    <p style={{ marginTop: '0.5rem' }}>This displays the average GPA for each major group. In the Report Footer, add:</p>
                    <code className="code-block">=Count(*) & " students total | Grand Average: " & Format(Avg([GPA]),"0.00")</code>
                </div>
            </section>
        </div>
    );
};

export default Reports;
