<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Job_Portal_0"></a>Job Portal</h1>
<h2 class="code-line" data-line-start=2 data-line-end=3 ><a id="Description_2"></a>Description</h2>
<p class="has-line-data" data-line-start="4" data-line-end="5">This project is a job portal application built using React.js and Material UI. It allows users to create, view, edit, and remove job posts using API endpoints with JWT authentication.</p>
<h2 class="code-line" data-line-start=6 data-line-end=7 ><a id="Getting_Started_6"></a>Getting Started</h2>
<h3 class="code-line" data-line-start=8 data-line-end=9 ><a id="Dependencies_8"></a>Dependencies</h3>
<ul>
<li class="has-line-data" data-line-start="10" data-line-end="11">Node.js</li>
<li class="has-line-data" data-line-start="11" data-line-end="12">React Router v6</li>
<li class="has-line-data" data-line-start="12" data-line-end="13">Material UI</li>
<li class="has-line-data" data-line-start="13" data-line-end="14">Axios for API calls</li>
<li class="has-line-data" data-line-start="14" data-line-end="16">JWT for authentication</li>
</ul>
<h3 class="code-line" data-line-start=16 data-line-end=17 ><a id="Installing_16"></a>Installing</h3>
<ol>
<li class="has-line-data" data-line-start="18" data-line-end="22">Clone the repository:<pre><code class="has-line-data" data-line-start="20" data-line-end="22" class="language-bash">https://github.com/faysalewucse/job_portal_techforing_task.git
<span class="hljs-built_in">cd</span> job-portal
</code></pre>
</li>
<li class="has-line-data" data-line-start="22" data-line-end="25">Install dependencies:<pre><code class="has-line-data" data-line-start="24" data-line-end="25" class="language-bash">npm install
</code></pre>
</li>
<li class="has-line-data" data-line-start="25" data-line-end="28">Create a .env.local file in the root directory and add the following content:<pre><code class="has-line-data" data-line-start="27" data-line-end="28" class="language-bash">VITE_API_BASE_URL=https://job-portal-server-<span class="hljs-number">5</span>gl2.onrender.com/api/v1
</code></pre>
</li>
<li class="has-line-data" data-line-start="28" data-line-end="29">Save the file.</li>
<li class="has-line-data" data-line-start="29" data-line-end="32">Start the development server:<pre><code class="has-line-data" data-line-start="31" data-line-end="32" class="language-bash">npm run dev
</code></pre>
</li>
<li class="has-line-data" data-line-start="32" data-line-end="34">Open your browser and navigate to <a href="http://localhost:6001">http://localhost:6001</a>.</li>
</ol>
<h2 class="code-line" data-line-start=34 data-line-end=35 ><a id="Job_Portal_API_Documentation_34"></a>Job Portal API Documentation</h2>
<p class="has-line-data" data-line-start="36" data-line-end="37">This document provides a comprehensive overview of the API endpoints for the job portal application.</p>
<p class="has-line-data" data-line-start="38" data-line-end="39"><strong>Authors:</strong></p>
<ul>
<li class="has-line-data" data-line-start="39" data-line-end="41">Faysal Ahmed (GitHub: <a href="https://github.com/faysalewucse">faysalewucse</a>)</li>
</ul>
<p class="has-line-data" data-line-start="41" data-line-end="42"><strong>Version History:</strong></p>
<ul>
<li class="has-line-data" data-line-start="42" data-line-end="44">1.0 - Initial Release (Current Version)</li>
</ul>
<h2 class="code-line" data-line-start=44 data-line-end=45 ><a id="User_Authentication_44"></a>User Authentication</h2>
<p class="has-line-data" data-line-start="46" data-line-end="47">Before accessing job-related functionalities, users need to register and log in to the system.</p>
<ul>
<li class="has-line-data" data-line-start="48" data-line-end="52"><strong>POST /api/users/signup</strong>
<ul>
<li class="has-line-data" data-line-start="49" data-line-end="50">Creates a new user account.</li>
<li class="has-line-data" data-line-start="50" data-line-end="51"><strong>Request Body:</strong> Details for the new user (e.g., username, password, email).</li>
<li class="has-line-data" data-line-start="51" data-line-end="52"><strong>Response:</strong> User object containing relevant information (e.g., ID, username) upon successful registration. Error message if registration fails.</li>
</ul>
</li>
<li class="has-line-data" data-line-start="52" data-line-end="57"><strong>POST /api/users/signin</strong>
<ul>
<li class="has-line-data" data-line-start="53" data-line-end="54">Authenticates an existing user.</li>
<li class="has-line-data" data-line-start="54" data-line-end="55"><strong>Request Body:</strong> User credentials (username/email and password).</li>
<li class="has-line-data" data-line-start="55" data-line-end="57"><strong>Response:</strong> Authentication token upon successful login. Error message if login fails.</li>
</ul>
</li>
</ul>
<h2 class="code-line" data-line-start=57 data-line-end=58 ><a id="Job_Management_57"></a>Job Management</h2>
<p class="has-line-data" data-line-start="59" data-line-end="60">These endpoints allow users to create, view, edit, and delete job posts.</p>
<ul>
<li class="has-line-data" data-line-start="61" data-line-end="65"><strong>POST /api/v1/jobs</strong>
<ul>
<li class="has-line-data" data-line-start="62" data-line-end="63">Creates a new job post.</li>
<li class="has-line-data" data-line-start="63" data-line-end="64"><strong>Request Body:</strong> Details of the job post (e.g., title, description, company, category, etc.). Requires authentication.</li>
<li class="has-line-data" data-line-start="64" data-line-end="65"><strong>Response:</strong> Newly created job post object upon success. Error message if job creation fails.</li>
</ul>
</li>
<li class="has-line-data" data-line-start="65" data-line-end="68"><strong>GET /api/v1/jobs</strong>
<ul>
<li class="has-line-data" data-line-start="66" data-line-end="67">Retrieves all existing job posts. May require authentication depending on implementation.</li>
<li class="has-line-data" data-line-start="67" data-line-end="68"><strong>Response:</strong> Array of job post objects containing details of each job.</li>
</ul>
</li>
<li class="has-line-data" data-line-start="68" data-line-end="72"><strong>PUT /api/v1/jobs/:id</strong>
<ul>
<li class="has-line-data" data-line-start="69" data-line-end="70">Updates an existing job post.</li>
<li class="has-line-data" data-line-start="70" data-line-end="71"><strong>Request Body:</strong> Modified details for the job post. Requires authentication and authorization to edit the specific job.</li>
<li class="has-line-data" data-line-start="71" data-line-end="72"><strong>Response:</strong> Updated job post object upon success. Error message if update fails.</li>
</ul>
</li>
<li class="has-line-data" data-line-start="72" data-line-end="76"><strong>DELETE /api/v1/jobs/:id</strong>
<ul>
<li class="has-line-data" data-line-start="73" data-line-end="74">Deletes an existing job post.</li>
<li class="has-line-data" data-line-start="74" data-line-end="76"><strong>Response:</strong> Message indicating success or failure of deletion. Requires authentication and authorization to delete the specific job.</li>
</ul>
</li>
</ul>
<p class="has-line-data" data-line-start="76" data-line-end="77"><strong>Note:</strong></p>
<ul>
<li class="has-line-data" data-line-start="78" data-line-end="80">The <code>:id</code> placeholder in the <code>PUT</code> and <code>DELETE</code> endpoints represents the unique identifier of the job post you want to edit or delete.</li>
</ul>
<p class="has-line-data" data-line-start="80" data-line-end="81">This documentation provides a basic overview of the API endpoints.</p>
