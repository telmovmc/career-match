<template>
    <div class="jobs-page">
        <div class="page-heading">
            <div>
                <p class="eyebrow">YOUR NEXT CHAPTER</p>
                <h1>Find work that <span>fits.</span></h1>
                <p class="page-subtitle">Thoughtful opportunities, picked for where you want to go.</p>
            </div>
            <p class="updated-note"><span class="status-dot"></span> Updated today</p>
    </div>

        <section class="search-panel" aria-label="Search and filter jobs">
            <label class="search-field">
                <span class="field-icon" aria-hidden="true">⌕</span>
                <span class="sr-only">Search roles or companies</span>
                <input type="search" placeholder="Role, skill, or company" />
            </label>
            <label class="filter-field">
                <span class="filter-label">LOCATION</span>
                <select aria-label="Location">
                    <option>Anywhere</option>
                </select>
            </label>
            <label class="filter-field">
                <span class="filter-label">WORK STYLE</span>
                <select aria-label="Work style">
                    <option>All work styles</option>
                </select>
            </label>
            <button class="filter-button" type="button" aria-label="More filters">
                <span aria-hidden="true">☷</span>
            </button>
        </section>

        <div class="results-toolbar">
            <p><strong>428</strong> opportunities</p>
            <p class="sort-label">SORT BY <span>Best match⌄</span></p>
        </div>

        <div class="job-workspace">
            <section class="job-list" aria-label="Job listings">
                <article class="job-card selected-job">
                    <div class="job-card-top">
                        <div class="company-logo logo-terracotta">S</div>
                        <span class="match-score"><span>✦</span> 96% match</span>
                    </div>
                    <h2>Senior Product Designer</h2>
                    <p class="company-name">Studio North <span>·</span> Design &amp; Technology</p>
                    <div class="job-meta"><span>⌖ Brooklyn, NY</span><span>◷ Full-time</span><span>$145k–$175k</span></div>
                    <div class="job-card-bottom"><span class="work-tag">Hybrid</span><span>Posted 2 days ago</span></div>
                </article>

                <article class="job-card">
                    <div class="job-card-top">
                        <div class="company-logo logo-olive">p.</div>
                        <span class="match-score"><span>✦</span> 91% match</span>
                    </div>
                    <h2>Product Designer, Growth</h2>
                    <p class="company-name">Parcel <span>·</span> Consumer Technology</p>
                    <div class="job-meta"><span>⌖ New York, NY</span><span>◷ Full-time</span><span>$130k–$160k</span></div>
                    <div class="job-card-bottom"><span class="work-tag">Remote-friendly</span><span>Posted 1 day ago</span></div>
                </article>

                <article class="job-card">
                    <div class="job-card-top">
                        <div class="company-logo logo-blue">A</div>
                        <span class="match-score"><span>✦</span> 88% match</span>
                    </div>
                    <h2>UX Designer</h2>
                    <p class="company-name">Arc &amp; Field <span>·</span> Climate</p>
                    <div class="job-meta"><span>⌖ Remote, US</span><span>◷ Full-time</span><span>$120k–$150k</span></div>
                    <div class="job-card-bottom"><span class="work-tag">Remote</span><span>Posted 3 days ago</span></div>
                </article>

                <article class="job-card">
                    <div class="job-card-top">
                        <div class="company-logo logo-yellow">m</div>
                        <span class="match-score"><span>✦</span> 84% match</span>
                    </div>
                    <h2>Design Lead</h2>
                    <p class="company-name">Morrow Health <span>·</span> Healthcare</p>
                    <div class="job-meta"><span>⌖ Manhattan, NY</span><span>◷ Full-time</span><span>$155k–$190k</span></div>
                    <div class="job-card-bottom"><span class="work-tag">Hybrid</span><span>Posted 5 days ago</span></div>
                </article>
            </section>

            <aside class="job-preview" aria-label="Selected job details">
                <div class="preview-scroll">
                    <div class="preview-company-row">
                        <div class="company-logo logo-terracotta preview-logo">S</div>
                        <div><p class="preview-company">STUDIO NORTH</p><p class="company-location">Brooklyn, New York</p></div>
                        <button class="save-button" type="button" aria-label="Save job">♡</button>
                    </div>

                    <p class="eyebrow preview-eyebrow">PRODUCT &amp; DESIGN</p>
                    <h2 class="preview-title">Senior Product<br />Designer</h2>
                    <p class="preview-subtitle">Build the next generation of tools for people doing their best work.</p>

                    <div class="preview-facts">
                        <div><span class="fact-icon">$</span><span><small>SALARY</small><strong>$145k – $175k</strong></span></div>
                        <div><span class="fact-icon">⌖</span><span><small>LOCATION</small><strong>Brooklyn, NY</strong></span></div>
                        <div><span class="fact-icon">◷</span><span><small>ARRANGEMENT</small><strong>Full-time · Hybrid</strong></span></div>
                    </div>

                    <div class="match-panel">
                        <div class="match-heading"><span>YOUR MATCH</span><strong>96%</strong></div>
                        <div class="match-track"><span></span></div>
                        <p>Your product thinking and visual craft are a strong fit for this team.</p>
                    </div>

                    <div class="preview-section">
                        <h3>About the role</h3>
                        <p>Studio North is looking for a thoughtful product designer to shape clear, useful experiences across our creative tools. You’ll work closely with product and engineering from early ideas through polished release.</p>
                    </div>

                    <div class="preview-section responsibilities">
                        <h3>What you’ll do</h3>
                        <ul>
                            <li>Lead design across discovery, prototyping, and delivery.</li>
                            <li>Make complex workflows feel calm and intuitive.</li>
                            <li>Partner with a curious, cross-functional team.</li>
                        </ul>
                    </div>

                    <div class="preview-tags"><span>Product design</span><span>Figma</span><span>Design systems</span></div>
                </div>
                <div class="preview-footer">
                    <p>Posted 2 days ago <span>·</span> 38 people viewed</p>
                    <button type="button" class="apply-button">View opportunity <span aria-hidden="true">↗</span></button>
                </div>
            </aside>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.jobs-page {
    --ink: #25332b;
    --muted: #78827b;
    --line: #e6eae4;
    --green: #27785c;
    max-width: 1500px;
    margin: 0 auto;
    padding: 42px clamp(20px, 5vw, 76px) 56px;
    color: var(--ink);
}

.page-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 28px;
}

.eyebrow {
    margin: 0 0 8px;
    color: var(--green);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
}

.page-heading h1 {
    margin: 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(32px, 3.2vw, 44px);
    font-weight: 400;
    letter-spacing: -1px;
    line-height: 1.1;
}

.page-heading h1 span {
    color: var(--green);
    font-style: italic;
}

.page-subtitle {
    margin: 9px 0 0;
    color: var(--muted);
    font-size: 13px;
}

.updated-note {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 4px;
    color: #78827b;
    font-size: 11px;
}

.status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #6aaf83;
    box-shadow: 0 0 0 3px #e3f0e5;
}

.search-panel {
    min-height: 74px;
    display: grid;
    grid-template-columns: minmax(220px, 1fr) minmax(150px, 205px) minmax(165px, 220px) 48px;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 8px;
    box-shadow: 0 4px 16px rgb(34 54 41 / 3%);
}

.search-field {
    min-width: 0;
    height: 46px;
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 0 13px;
    border: 1px solid #e7ebe6;
    border-radius: 5px;
}

.field-icon {
    color: #728078;
    font-size: 24px;
    line-height: 1;
    transform: rotate(-20deg);
}

.search-field input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: 0;
    color: var(--ink);
    background: transparent;
    font-size: 12px;
}

.search-field input::placeholder {
    color: #929b94;
}

.filter-field {
    height: 46px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    padding: 0 12px;
    border: 1px solid #e7ebe6;
    border-radius: 5px;
}

.filter-label {
    color: #89938b;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1px;
}

.filter-field select {
    width: 100%;
    padding: 0 16px 0 0;
    appearance: none;
    border: 0;
    outline: 0;
    color: #34443a;
    background: transparent;
    font-size: 11px;
}

.filter-field::after {
    position: relative;
    top: -17px;
    align-self: flex-end;
    content: '⌄';
    color: #78827b;
    font-size: 13px;
    pointer-events: none;
}

.filter-button {
    width: 46px;
    height: 46px;
    border: 1px solid #e7ebe6;
    border-radius: 5px;
    color: var(--green);
    background: #f8faf7;
    font-size: 20px;
}

.results-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 2px 12px;
    color: var(--muted);
    font-size: 11px;
}

.results-toolbar p {
    margin: 0;
}

.results-toolbar strong {
    color: var(--ink);
    font-size: 13px;
}

.sort-label {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #929b94;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.8px;
}

.sort-label span {
    color: #39483e;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0;
}

.job-workspace {
    display: grid;
    grid-template-columns: minmax(330px, 0.88fr) minmax(0, 1.12fr);
    align-items: start;
    gap: 18px;
}

.job-list {
    display: grid;
    gap: 10px;
}

.job-card {
    min-width: 0;
    padding: 17px 18px 14px;
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 7px;
    transition: border-color 160ms ease, box-shadow 160ms ease;
}

.selected-job {
    border-color: #6ba58a;
    box-shadow: inset 3px 0 #27785c, 0 4px 14px rgb(34 54 41 / 4%);
}

.job-card-top,
.job-card-bottom,
.job-meta {
    display: flex;
    align-items: center;
}

.job-card-top {
    justify-content: space-between;
    margin-bottom: 13px;
}

.company-logo {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    border-radius: 9px;
    font-family: Georgia, serif;
    font-size: 22px;
    font-weight: 700;
}

.logo-terracotta { color: #fffaf5; background: #bd7054; }
.logo-olive { color: #365341; background: #dce8d3; }
.logo-blue { color: #fff; background: #547a83; }
.logo-yellow { color: #4a523b; background: #e7d889; }

.match-score {
    padding: 5px 8px;
    border-radius: 3px;
    color: #3b795d;
    background: #eef6ee;
    font-size: 9px;
    font-weight: 700;
}

.match-score span {
    padding-right: 3px;
    color: #c38a47;
}

.job-card h2 {
    overflow: hidden;
    margin: 0 0 4px;
    color: #26352c;
    font-size: 15px;
    font-weight: 650;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.company-name {
    overflow: hidden;
    margin: 0;
    color: #78827b;
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.company-name span {
    padding: 0 3px;
    color: #b0b8b1;
}

.job-meta {
    flex-wrap: wrap;
    gap: 7px 14px;
    margin-top: 16px;
    color: #616d65;
    font-size: 9px;
}

.job-card-bottom {
    justify-content: space-between;
    gap: 8px;
    margin-top: 14px;
    padding-top: 11px;
    border-top: 1px solid #eff1ed;
    color: #929b94;
    font-size: 9px;
}

.work-tag {
    padding: 4px 7px;
    border: 1px solid #e6ebe4;
    border-radius: 3px;
    color: #617468;
    background: #fafbf9;
}

.job-preview {
    position: sticky;
    top: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 104px);
    min-height: 620px;
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 7px;
}

.preview-scroll {
    overflow-y: auto;
    padding: 25px 28px 20px;
}

.preview-company-row {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-bottom: 23px;
}

.preview-logo {
    width: 42px;
    height: 42px;
}

.preview-company,
.company-location {
    margin: 0;
}

.preview-company {
    color: #35453b;
    font-size: 9px;
    font-weight: 750;
    letter-spacing: 1px;
}

.company-location {
    margin-top: 3px;
    color: #8a948d;
    font-size: 10px;
}

.save-button {
    width: 34px;
    height: 34px;
    margin-left: auto;
    border: 1px solid #e6ebe4;
    border-radius: 5px;
    color: #67766c;
    background: #fff;
    font-size: 19px;
}

.preview-eyebrow {
    margin-bottom: 7px;
    font-size: 9px;
}

.preview-title {
    margin: 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(27px, 2.4vw, 34px);
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 1.1;
}

.preview-subtitle {
    max-width: 440px;
    margin: 10px 0 20px;
    color: #748078;
    font-size: 11px;
    line-height: 1.6;
}

.preview-facts {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    padding: 15px 0;
    border-top: 1px solid #edf0ec;
    border-bottom: 1px solid #edf0ec;
}

.preview-facts > div {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.fact-icon {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    border-radius: 5px;
    color: #47745b;
    background: #f0f5ef;
    font-size: 13px;
}

.preview-facts small,
.preview-facts strong {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.preview-facts small {
    margin-bottom: 3px;
    color: #929b94;
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 0.7px;
}

.preview-facts strong {
    color: #39483e;
    font-size: 9px;
    font-weight: 600;
}

.match-panel {
    margin-top: 18px;
    padding: 13px 15px;
    border: 1px solid #e4eee2;
    border-radius: 5px;
    background: #f7faf6;
}

.match-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #5d7663;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1px;
}

.match-heading strong {
    color: #27785c;
    font-size: 14px;
    letter-spacing: 0;
}

.match-track {
    height: 4px;
    overflow: hidden;
    margin-top: 8px;
    border-radius: 3px;
    background: #e4ebe1;
}

.match-track span {
    width: 96%;
    height: 100%;
    display: block;
    border-radius: inherit;
    background: #62a77b;
}

.match-panel p {
    margin: 8px 0 0;
    color: #768178;
    font-size: 9px;
}

.preview-section {
    margin-top: 19px;
}

.preview-section h3 {
    margin: 0 0 7px;
    color: #2d3b32;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 16px;
    font-weight: 400;
}

.preview-section p,
.preview-section li {
    color: #6e7971;
    font-size: 10px;
    line-height: 1.7;
}

.preview-section p {
    margin: 0;
}

.preview-section ul {
    display: grid;
    gap: 5px;
    margin: 0;
    padding-left: 16px;
}

.preview-section li::marker {
    color: #71a17a;
}

.preview-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 16px;
}

.preview-tags span {
    padding: 5px 8px;
    border-radius: 3px;
    color: #63756a;
    background: #f1f4ef;
    font-size: 8px;
}

.preview-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    margin-top: auto;
    padding: 14px 22px;
    border-top: 1px solid #edf0ec;
    background: #fff;
}

.preview-footer p {
    margin: 0;
    color: #929b94;
    font-size: 9px;
}

.preview-footer p span {
    padding: 0 3px;
}

.apply-button {
    min-height: 40px;
    padding: 0 15px;
    border: 0;
    border-radius: 4px;
    color: #fff;
    background: #27785c;
    font-size: 10px;
    font-weight: 650;
}

.apply-button span {
    padding-left: 8px;
    font-size: 13px;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
}

@media (max-width: 900px) {
    .job-workspace {
        grid-template-columns: minmax(260px, 0.9fr) minmax(0, 1.1fr);
        gap: 12px;
    }

    .preview-scroll {
        padding: 20px;
    }

    .preview-facts {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .preview-facts > div {
        gap: 9px;
    }
}

@media (max-width: 680px) {
    .jobs-page {
        padding-top: 30px;
    }

    .page-heading {
        align-items: flex-start;
    }

    .updated-note {
        margin-top: 3px;
        font-size: 0;
    }

    .search-panel {
        grid-template-columns: 1fr 46px;
    }

    .search-field {
        grid-column: 1 / -1;
    }

    .filter-field {
        min-width: 0;
    }

    .job-workspace {
        grid-template-columns: 1fr;
    }

    .job-preview {
        position: static;
        max-height: none;
        min-height: 0;
    }

    .preview-scroll {
        padding: 22px;
    }

    .preview-facts {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (max-width: 420px) {
    .page-heading h1 {
        font-size: 31px;
    }

    .page-subtitle {
        max-width: 260px;
        font-size: 11px;
    }

    .preview-facts {
        grid-template-columns: 1fr;
    }

    .preview-footer {
        align-items: flex-start;
        flex-direction: column;
    }
}
</style>