import dbConnect from '../../utils/db'
import Changarro from '../../models/Changarros'

export default async function handler(req, res) {
 await dbConnect()
 const {method} = req;
 switch (method) {
  case 'POST': try {
      const changarros = new Changarro(req.body)
      await changarros.save()
      return res.status(201).json({success: true, data: changarros})
  } catch (e) {
    res.status(400).json({succes: false, error: e.message});
 }
 default: res.status(500).json({success: false, error: 'Method not allowed'});
}
}
