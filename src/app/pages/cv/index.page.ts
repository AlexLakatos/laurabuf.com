import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkillsComponent } from '../../components/skills/skills.component';
import { TechnicalComponent } from '../../components/technical/technical.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [RouterLink, SkillsComponent, TechnicalComponent],
  template: `
    <main>
      <p class="title">Software Developer</p>
      <p class="info">Cluj-Napoca, Cluj</p>
      <section class="about1">
        <h1>Laura <span>Buf Ilies</span></h1>
        <h2 class="double">About Me</h2>
        <p>
          As a developer looking to step out of my comfort zone, I’m a very curious person who learns every day from
          everyone. My greatest skill is the ability to learn quickly and think analytically, connecting the dots to
          find solutions under pressure. I’m optimistic and believe that everything is possible, though my enthusiasm
          sometimes leads to miscommunication. But as I said, I’m learning every day, and I believe people learn best
          through making mistakes.<br />With this drive to learn, I’m looking to transition from development to
          management, aiming to become an Engineering Manager. Let’s go through my story.
        </p>

        <h3>Manager. DiceIT Games</h3>

        <p>
          I wanted to do something more meaningful, so I decided to create a community around board games. The next day,
          I contacted a venue to host an event, set the date, and started developing a new concept. Since I enjoy
          working in a team, I invited two colleagues to join me. I presented the idea, and together we decided who
          would handle what. I built the team, and it’s been working great. We took care of everything—social media,
          marketing, designing posters and logos, and overall management. After two months, a company approached us with
          an offer to organize an event for their employees.
        </p>
      </section>

      <p class="about2">
        As I mentioned, I see myself as a fast learner, and my current company noticed this about me. Because of my
        drive, I was responsible for almost all the POCs (Proofs of Concept) that we came up with or that were brought
        to us. I was in charge of doing the research, deciding which technology fit best, weighing the pros and cons,
        presenting my findings to the team, and starting the implementation. Through this experience, I discovered that
        I enjoy staying up to date with the latest advancements in technology.
      </p>

      <section class="strengths">
        <img src="img/laura.png" alt="Laura Buf" />
        <h2 class="single">Skills</h2>
        <skills></skills>
      </section>

      <section class="background">
        <div class="two-col">
          <h2 class="double">Experience</h2>
          <div>
            <div>
              <p><strong>Angular Developer</strong></p>
              <p>dataglobal, Cluj-Napoca</p>
            </div>
            <p>Dec 2022 – Present</p>
          </div>
          <div>
            <div>
              <p><strong>Software Developer (POCs)</strong></p>
              <p>dataglobal, Cluj-Napoca</p>
            </div>
            <p>Jun 2019 - Dec 2022</p>
          </div>
          <div>
            <div>
              <p><strong>Software Developer (Automotive)</strong></p>
              <p>Magneti Marelli, Cluj-Napoca</p>
            </div>
            <p>Mar 2018 - May 2019</p>
          </div>
          <div>
            <div>
              <p><strong>iOS Developer</strong></p>
              <p>Neusoft EDC, Cluj-Napoca</p>
            </div>
            <p>Apr 2015 - Mar 2018</p>
          </div>
          <div>
            <div>
              <p><strong>Junior C++ Developer</strong></p>
              <p>Neusoft EDC, Cluj-Napoca</p>
            </div>
            <p>Aug 2014 - Mar 2015</p>
          </div>
        </div>

        <div class="two-col">
          <h2 class="double">Trainings</h2>
          <div>
            <div>
              <p><strong>PMP Course</strong></p>
              <p>PMI Access</p>
            </div>
            <p>May 2024</p>
          </div>
          <div>
            <div>
              <p><strong>Scrum Master Learning Path</strong></p>
              <p>scrum.org</p>
            </div>
            <p>Aug 2024</p>
          </div>
          <div>
            <div>
              <p><strong>ISO26262:2011 Training</strong></p>
              <p>Magneti Marelli</p>
            </div>
            <p>Jan 2018</p>
          </div>
        </div>

        <div class="education">
          <h2 class="double">Education</h2>
          <div>
            <p><strong>Babes-Bolyai University, Cluj-Napoca</strong></p>
            <p><em>Master's Degree: High Performance Computing and Big Data Analytics</em></p>
            <p>Oct 2015 - Jul 2017</p>
          </div>
          <div>
            <p><strong>Babes-Bolyai University, Cluj-Napoca</strong></p>
            <p><em>Bachelor's degree: Computer Science</em></p>
            <p>Oct 2012 - Jul 2015</p>
          </div>
        </div>
      </section>

      <section class="abilities">
        <div>
          <h2 class="single">Technical Skills</h2>
          <technical></technical>
        </div>

        <div class="languages">
          <h2 class="single">Languages</h2>
          <ul>
            <li>English</li>
            <li>Italian</li>
          </ul>
        </div>
      </section>
    </main>
  `,
  styleUrl: './cv.page.css',
})
export default class CvComponent {}
