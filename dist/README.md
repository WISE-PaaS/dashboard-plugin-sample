# Dashboad-Plugin-Sample

WISE-PaaS/Dashboard Plugin Sample Code

---
### Folder Contents

<table>
    <tr>
        <th>Files</th>
        <th>Functions</th>
    </tr>
    <tr>
        <th>Package.json</th>
        <th>NPM Package list</th>
    </tr>
    <tr>
        <th>Gruntfile</th>
        <th>Grunt build scripts</th>
    </tr>
    <tr>
        <th>dist</th>
        <th>Build result files</th>
    </tr>
    <tr>
        <td rowspan="5" style="text-align:center; color:black; font-weight: bold">src</td>
        <td style="text-align:center; color:black; font-weight: bold">Plugin.json(Plugin Information)</td>
    </tr>
    <tr>
        <td style="text-align:center; color:black; font-weight: bold">module.js(Plugin loader)</td>
    </tr>
    <tr>
        <td style="text-align:center; color:black; font-weight: bold">xxx_ctrl(Plugin Controller)</td>
    </tr>
    <tr>
        <td style="text-align:center; color:black; font-weight: bold">module.html(Plugin main view)</td>
    </tr>
    <tr>
        <td style="text-align:center; color:black; font-weight: bold">editor.html(Editor Page)</td>
    </tr>
</table>

### Events of Panel

<table>
    <tr>
        <th>Events</th>
        <th>Functions</th>
    </tr>
    <tr>
        <th>Render</th>
        <th>Triggered when panel refresh</th>
    </tr>
    <tr>
        <th>data-received</th>
        <th>Triggered on data refresh</th>
    </tr>
    <tr>
        <th>data-error</th>
        <th>Used to handle errors on dashboard refresh</th>
    </tr>
    <tr>
        <th>init-edit-mode</th>
        <th>Used to add tabs when editing a panel</th>
    </tr>
    <tr>
        <th>data-snapshot-load</th>
        <th>Triggered to load data when in snapshot mode</th>
    </tr>
</table>