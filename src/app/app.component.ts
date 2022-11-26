import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IDictionary {
  [index:number]: number[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'calc';
  lookupGender= [ {'m': 'Male'},{'f': 'Female'}]
  lookupAge = [3, 4, 6, 10, 12, 14, 15, 16, 18, 20, 25, 30, 35, 40]
  heartBeatsLookup = [
    50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
  ];

  maleLookup: IDictionary = {
    3: [0, 0, 0, 155, 159, 163, 167, 171, 175, 178, 182, 186, 190],
    4: [0, 0, 149, 152, 156, 160, 163, 168, 171, 175, 179, 182, 186],
    6: [0, 141, 144, 148, 151, 155, 159, 162, 167, 171, 174, 178, 181],
    8: [0, 136, 141, 145, 148, 152, 156, 159, 163, 167, 171, 175, 178],
    10: [130, 134, 139, 142, 146, 149, 153, 157, 160, 165, 169, 172, 176],
    12: [128, 132, 136, 140, 144, 147, 151, 155, 158, 162, 167, 170, 174],
    14: [127, 130, 134, 137, 142, 146, 149, 153, 157, 160, 165, 169, 172],
    16: [125, 129, 132, 136, 141, 144, 148, 152, 155, 159, 162, 167, 0],
    18: [124, 127, 131, 135, 139, 143, 147, 150, 154, 157, 161, 166, 0],
    20: [123, 126, 130, 134, 137, 142, 145, 149, 153, 156, 160, 165, 0],
    25: [120, 124, 127, 131, 135, 139, 143, 147, 150, 154, 157, 0, 0],
    30: [118, 122, 125, 129, 133, 136, 141, 145, 148, 152, 155, 0, 0],
    35: [116, 120, 124, 127, 131, 135, 139, 143, 147, 150, 0, 0, 0],
    40: [115, 119, 122, 126, 130, 133, 137, 141, 145, 149],
  };

  femaleLookup: IDictionary = {
    3: [0, 0, 0, 150, 153, 157, 161, 165, 169, 172, 176, 180, 183],
    4: [0, 0, 141, 145, 149, 152, 156, 159, 163, 168, 171, 175, 179],
    6: [0, 130, 134, 137, 142, 146, 149, 153, 156, 160, 165, 168, 172],
    8: [0, 125, 129, 133, 136, 141, 144, 148, 152, 155, 159, 163, 167],
    10: [118, 122, 125, 129, 133, 136, 141, 144, 148, 152, 155, 159, 163],
    12: [115, 119, 122, 126, 130, 133, 137, 141, 145, 149, 152, 156, 160],
    14: [112, 116, 120, 123, 127, 131, 134, 133, 143, 146, 150, 153, 157],
    16: [109, 114, 118, 121, 125, 128, 132, 136, 140, 144, 148, 151, 0],
    18: [107, 111, 116, 119, 123, 127, 130, 134, 137, 142, 146, 149, 0],
    20: [106, 109, 114, 118, 121, 125, 128, 132, 136, 140, 144, 148, 0],
    25: [102, 106, 109, 114, 118, 121, 125, 128, 132, 136, 140, 0, 0],
    30: [99, 103, 106, 110, 115, 118, 122, 125, 129, 133, 136, 0, 0],
    35: [97, 100, 104, 107, 111, 116, 119, 123, 127, 130, 0, 0, 0],
    50: [94, 98, 102, 105, 109, 112, 117, 121, 124, 128, 0, 0, 0],
  };

  selectedGender = 'm';
  selectedAge= 3;
  heartRate= undefined;
  Hb = undefined;
  PVSat= undefined;
  PVPaO2 = undefined;
  PASat = undefined;
  PAPaO2 = undefined;
  AORTASat = undefined;
  AortaPaO2 = undefined;
  MVSat = undefined;
  MVPaO2 = undefined;
  meanPAp = undefined;
  meanLAp = undefined;
  meanAOp = undefined;
  meanRAp = undefined;
  Qs?: number;
  Qp?: number;
  QpbyQs?: number;
  Pvr?: number;
  Svr?: number;
  PvrbySvr?: number;
  O2Consumption?: number;


  roundUpNearest10 = (num: number): number => {
    return Math.round(num / 10) * 10;
  }

  getO2Consumption = (gender: string, age: number, heartRate: number): any => {
    const index = this.heartBeatsLookup.indexOf(this.roundUpNearest10(heartRate));
    if (index == -1) return 0;

    if (gender == "f") {
      return this.femaleLookup[age].at(index);
    } else {
      return this.maleLookup[age].at(index);
    }
  }

 // const Oxygen = getO2Consumption("m", 3, 114);
  // getO2Consumption('f', 3, 114);
  // const Hb = 13.9;
  // const PVSat = 99;
  // const PVPaO2 = 250;

  // const PASat = 84.8;
  // const PAPaO2 = 110;

  // const AORTASat = 95.1;
  // const AortaPaO2 = 240;

  // const MVSat = 65.1;
  // const MVPaO2 = 110;

  // const meanPAp = 80;
  // const meanLAp = 8;
  // const meanAOp = 90;
  // const meanRAp = 7;

  getPvO2content = (pvSat: number, pvPaO2: number, hb: number): number => {
    let capacity = 1.36;
    let PvO2content = (hb * capacity * (pvSat / 100) + 0.003 * pvPaO2) * 10;

    return PvO2content;
  }

  getPaO2content = (paSat: number, paPaO2: number, hb: number) => {
    let capacity = 1.36;
    let PaO2content = (hb * capacity * (paSat / 100) + 0.003 * paPaO2) * 10;
    return PaO2content;
  }

  getQp = (oxy: number, pvSat: number, pvPaO2:number, hb: number, paSat: number, paPaO2: number): number => {
    const pv = this.getPvO2content(pvSat, pvPaO2, hb);
    const pa = this.getPaO2content(paSat, paPaO2, hb);
    const qp = oxy / (pv - pa);
    return qp
  }

 // getQp = (Oxygen, PVSat, PVPaO2, Hb, PASat, PAPaO2);

  getAortaO2content = (AORTASat: number, AOPaO2: number, hb: number) => {
    let capacity = 1.36;
    let AortaO2content =
      (hb * capacity * (AORTASat / 100) + 0.003 * AOPaO2) * 10;

    return AortaO2content;
  }

  getMvO2content = (MVSat: number, MVPaO2: number, hb: number) => {
    let capacity = 1.36;
    let MVO2content = (hb * capacity * (MVSat / 100) + 0.003 * MVPaO2) * 10;
    return MVO2content;
  }

  getQs = (oxy: number, MVSat: number, MVPaO2: number, hb: number, AORTASat: number, AOPaO2: number) => {
    const aorta = this.getAortaO2content(AORTASat, AOPaO2, hb);
    const mv = this.getMvO2content(MVSat, MVPaO2, hb);
    const qs = oxy / (aorta - mv);
    return qs;
  }

  getPVR = (meanPAp: number, meanLAp: number, Qp: number) =>{
    return (meanPAp - meanLAp) / Qp;
  }

  getSVR = (meanAOp: number, meanRAp: number, Qs: number) => {
    return (meanAOp - meanRAp) / Qs;
  }

  getPVRbySVR = (pvr: number, svr: number) =>{
    return pvr / svr;
  }

  getQpbyQs = (qp: number, qs: number) =>{
    return qp / qs;
  }


  onSubmit(f: NgForm) {
    if(f.valid){
      let oxygen = this.getO2Consumption(this.selectedGender, this.selectedAge, this.heartRate!);
      console.log("O2", oxygen);
      this.O2Consumption = oxygen;
      this.Qp = this.getQp(oxygen, this.PVSat!, this.PVPaO2!, this.Hb!, this.PASat!, this.PAPaO2!);
      this.Qs = this.getQs(oxygen, this.MVSat!, this.MVPaO2!, this.Hb!, this.AORTASat!, this.AortaPaO2!);
      this.Pvr = this.getPVR(this.meanPAp!, this.meanLAp!, this.Qp);
      this.Svr = this.getSVR(this.meanAOp!, this.meanRAp!, this.Qs);
      this.PvrbySvr = this.getPVRbySVR(this.Pvr, this.Svr);
      this.QpbyQs = this.getQpbyQs(this.Qp, this.Qs);
    }
  }

  Reset = (f: NgForm): void => {
    f.reset();
    this.Qp = undefined;
    this.Qs = undefined;
    this.Pvr = undefined;
    this.Svr = undefined;
    this.PvrbySvr = undefined;
    this.QpbyQs = undefined;
  }
}
